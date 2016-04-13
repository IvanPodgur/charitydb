var keystone = require('keystone');
var Types = keystone.Field.Types;

var Youngpeople = new keystone.List('Youngpeople', {
	label: 'Young Persons',
	autokey: { from: 'name', path: 'key', unique: true },
	map: {name:'name'}
});

Youngpeople.add({
	name: { type: String, required: true, initial: true },
	referenceDate: { type: Types.Date, initial: true  },
	referenceAgency: {type: String, initial: true  },
	intials: { type: String, initial: true },
	nationality: { type: String },
	yearsInUK: {type: Types.Number},
	dob: { type: Types.Date},
	age: {type: Types.Number},
	currentAccomodation: {type: String},
	college: {type: String},
	course: {type: String},
	supportNeeds: {type: String},
	scaleOfVulnerability: {type: String},
	medicalNeeds: {type: String},
	availability: {type: String},
	volunteerPreferences: {type: String},
	mentorName: {type: String},
	mentoringStartDate: {type: Types.Date},
	timeInMentoring: {type: String},
	mentoringLocation: {type: String},
	mentoringFrequency: {type: String},
	lengthOfMenoting: {type: String},
	lastDate: { type: Types.Date},
	outcome: {type: String}

});

Youngpeople.track = true;
Youngpeople.defaultColumns = 'name|20%, dob|15%, nationality|10%, supportNeeds|20%';
Youngpeople.register();
