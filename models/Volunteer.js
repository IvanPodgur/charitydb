var keystone = require('keystone');
var Types = keystone.Field.Types;

var Volunteer = new keystone.List('Volunteer', {
	autokey: { from: 'name', path: 'key', unique: true },
});

Volunteer.add({
	name: { type: String, required: true },
	initials: { type: String, initial: true  },
	applicationdate: { type: Types.Date, initial: true },
	gender: { type: String, initial: true  },
	age: {type: Types.Number, initial: true },
	EthnicBackground: {type: String, initial: true },
	email: { type: Types.Email, initial: true },
	HomeTel: {type: String, initial: true },
	mobile: {type: String, initial: true },
	address: {type: String, initial: true },
	availability: {type: String, initial: true },
	OtherLanguages: {type: String, initial: true },
	Experience: {type: String, initial: true },
	DBS: {type: String, initial: true }

});

Volunteer.track = true;
Volunteer.defaultColumns = 'name|20%, initials|15%, gender|10%, mobile|20%';
Volunteer.register();
