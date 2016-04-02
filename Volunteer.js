var keystone = require('keystone');
var Types = keystone.Field.Types;

var Volunteer = new keystone.List('Volunteer', {
	autokey: { from: 'name', path: 'key', unique: true },
});

Volunteer.add({
	name: { type: String, required: true},
	initials: { type: String },
	applicationdate: { type: Types.Date  },
	gender: { type: String },
	age: {type: Types.Number},
	EthnicBackground: {type: String},
	email: {type: Types.email},
	HomeTel: {type: String},
	mobile: {type: String},
	address: {type: String},
	availability: {type: String},
	OtherLanguages: {type: String},
	Experience: {type: String},
	DBS: {type: String}

});

Volunteer.track = true;
Volunteer.defaultColumns = 'name|20%, initials|15%, gender|10%, mobile|20%';
Volunteer.register();
