var keystone = require('keystone');
var Types = keystone.Field.Types;

var User = new keystone.List('User', {
	// nodelete prevents people deleting the demo admin user
	nodelete: true,
});

User.add({
	name: { type: Types.Name, required: true, index: true },
	email: { type: Types.Email, initial: true, required: true, index: true },
	phone: { type: String, width: 'short' },
	 role: { 
    type: Types.Select,
    options: 'Admin, EducationFund, mentoring, India, Cambodia', 
    required: true, initial: true
  	},
	password: { type: Types.Password, initial: true, required: false },
}, 'Permissions', {
	isProtected: { type: Boolean, noedit: true, hidden: true },
	isAdmin: { type: Boolean, label: 'Can access Keystone', index: true },
	isSupperAdmin: { type: Boolean, label: 'Is Supper Admin', index: true },
	roles:{ type: Types.TextArray, label: 'Roles (do not use empty string please!)' }
});

// Provide access to Keystone
User.schema.virtual('canAccessKeystone').get(function() {
	return true;
});

User.relationship({ ref: 'Post', path: 'posts', refPath: 'author' });

User.schema.methods.wasActive = function () {
	this.lastActiveOn = new Date();
	return this;
}

/**
 * USER PROTECTION
 * The following code prevents anyone updating the default admin user
 * and breaking access to the demo
 */

function protect (path) {
	var user = this;
	User.schema.path(path).set(function(value) {
		return (user.isProtected) ? user.get(path) : value;
	});
}

['name.first', 'name.last', 'email'].forEach(protect);

User.schema.path('password').set(function (value) {
	return (this.isProtected) ? '$2a$10$b4vkksMQaQwKKlSQSfxRwO/9JI7Fclw6SKMv92qfaNJB9PlclaONK' : value;
});

/**
 * END USER PROTECTION
 */

User.track = true;
User.defaultColumns = 'name, email, phone, photo';
User.register();
