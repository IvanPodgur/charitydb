var keystone = require('keystone');
var Types = keystone.Field.Types;

var Volunteerbritain = new keystone.List('Volunteerbritain', {
	label: 'Volunteers',
	autokey: { from: 'name', path: 'key', unique: true },
	map: {name: 'name'}
});

Volunteerbritain.add({
	name: { type: String, required: true,initial: true },
	initials: { type: String, initial: true  },
	applicationDate: { type: Types.Date, initial: true },
	sex: { type: Types.Select,  options: 'male, female', initial: true  },
	age: {type: Types.Number, initial: true },
	EthnicBackground: {type: String, initial: true },
	email: { type: Types.Email, initial: true },
	HomeTel: {type: String, initial: true },
	mobile: {type: String, initial: true },
	address: {type: String, initial: true },
	availability: {type: String, initial: true },
	OtherLanguages: {type: String, initial: true },
	Experience: {type: Types.Textarea, initial: true },
	DBS: {type: String, initial: true }

});

Volunteerbritain.track = true;
Volunteerbritain.defaultColumns = 'name|20%, initials|15%, gender|10%, mobile|20%';
Volunteerbritain.register();
