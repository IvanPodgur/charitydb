var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Yes Model
 * ==========
 */

var Yes = new keystone.List('Yes',{
	label: "Users"
});

Yes.add({
	name: { type: Types.Name, required: true, index: true },
	email: { type: Types.Email, initial: true, required: true, index: true },
	password: { type: Types.Password, initial: true, required: true }
}, 'Permissions', {
	isAdmin: { type: Boolean, label: 'Can access Keystone', index: true },
	isSupperAdmin: { type: Boolean, label: 'Is Supper Admin', index: true },
	roles:{ type: Types.TextArray, label: 'Roles (do not use empty string please!)' }
});

// Provide access to Keystone
Yes.schema.virtual('canAccessKeystone').get(function() {
	return this.isAdmin;
});


/**
 * Registration
 */

Yes.defaultColumns = 'name, email, isAdmin';
Yes.register();
