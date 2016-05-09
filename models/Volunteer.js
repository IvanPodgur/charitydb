var keystone = require('keystone');
var Types = keystone.Field.Types;

var Volunteer = new keystone.List('Volunteer', {
	label: 'Volunteers',
	autokey: { from: 'name', path: 'key', unique: true },
	map: {name: 'name'}
});

Volunteer.add(
	'Geeneral Details',{
	name: { type: String, required: true,initial: true },
	project: { type: Types.Select,  options: 'Mentoring, EducationFund, India, Cambodia' , required: true, initial: true},
	applicationDate: { type: Types.Date, initial: true },
	initials: { type: String, initial: true  },
	sex: { type: Types.Select,  options: 'male, female', initial: true  },
	age: {type: Types.Number, initial: true },
	EthnicBackground: {type: String, initial: true },
	email: { type: Types.Email, initial: true },
	HomeTel: {type: String, initial: true },
	mobile: {type: String, initial: true },
	address: {type: String, initial: true },
	progressOfDBS: {type: String, initial: true },
	}, 'Mentorign Specific Data',{
	completedInduction: { type: Types.Select,  options: 'yes, no' },
	personalDevPlanMnth1: { type: Types.Select,  options: 'yes, no' },
	personalDevPlanMnth2: { type: Types.Select,  options: 'yes, no' },
	personalDevPlanMnth3: { type: Types.Select,  options: 'yes, no' }

});

Volunteer.track = true;
Volunteer.defaultColumns = 'name|20%, initials|15%, sex|10%, mobile|20%';
Volunteer.register();
