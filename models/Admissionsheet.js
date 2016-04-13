var keystone = require('keystone');
var Types = keystone.Field.Types;

var Admissionsheet = new keystone.List('Admissionsheet', {
	label: 'Young Persons Admission',
	autokey: { from: 'name', path: 'key', unique: true },
	map: { name: 'name' }

});

Admissionsheet.add({
	date: { type: Types.Date, initial: true },
	adoptionNumber: { type: String, initial: true },
	name: { type: String, required: true, initial: true },
	gender: { type: Types.Select, options: 'male, female', initial: true },
	dob: { type: Types.Date, initial: true },
	schoolStandard: {type: String, initial: true },
	fathersName: {type: String, initial: true },
	fatherProfession: {type: String, initial: true },
	fatherAnualSalary: {type: String, initial: true },
	mothersName: {type: String, initial: true },
	motherProfession: {type: String, initial: true },
	motherAnualSalary: {type: String, initial: true },
	numberOfSiblings: {type: String, initial: true },
	nameOfTheVillage: {type: String, initial: true }
});

Admissionsheet.track = true;
Admissionsheet.defaultColumns = 'name|20%, dob|15%, gender|10%, schoolStandard|20%';
Admissionsheet.register();
