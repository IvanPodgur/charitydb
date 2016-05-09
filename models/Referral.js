var keystone = require('keystone');
var Types = keystone.Field.Types;

var Referral = new keystone.List('Referral', {
	label: 'Young People',
	autokey: { from: 'name', path: 'key', unique: true },
	map: { name: 'name' }

});

Referral.add(
	'General Info', {
		name: { type: String, required: true, initial: true, note: 'Enter full name of young person' },
		project: { type: Types.Select,  options: 'Mentoring, EducationFund, India, Cambodia' , required: true, initial: true},
		referralDate: { type: Types.Date, initial: true },
		referralAgency: {type: String, initial: true },
		intials: { type: String, initial: true },
		nationality: { type: String },
		yearsInUK: {type: Types.Number},
		dob: { type: Types.Date},
		futureEdPlace: {type: String},
		course: {types: String},
		year: {type: Types.Number},
		supportReasons: {type: String},
		amountRequested: {type: String},
		frequency: {type: String},
		startDate: {type: Types.Date},
		lastDate: {type: Types.Date},
		totalPaid: {type: String},
	},'Mentoring details', {
		scaleOfVulnerability: {type: String},
		medicalNeeds: {type: String},
		availability: {type: String},
		volunteerPreferences: {type: String},
		mentorName: {type: String},
		mentoringStartDate: {type: Types.Date},
		timeInMentoring: {type: String},
		mentoringLocation: {type: String},
		mentoringFrequency: {type: String},
		lengthOfMentoring: {type: String},
		lastDate: { type: Types.Date},
		outcome: {type: Types.Textarea},
		personalDevPlanMnth1: { type: Types.Select,  options: 'yes, no' },
		personalDevPlanMnth2: { type: Types.Select,  options: 'yes, no'  },
		personalDevPlanMnth3: { type: Types.Select,  options: 'yes, no'  },
	},'India Specific Details', {
		schoolStandard: {type: String},
		fathersName: {type: String},
		fatherProfession: {type: String },
		fatherAnualSalary: {type: String },
		mothersName: {type: String },
		motherProfession: {type: String },
		motherAnualSalary: {type: String },
		numberOfSiblings: {type: String },
		nameOfTheVillage: {type: String }
	});

Referral.track = true;
Referral.defaultColumns = 'name|20%, dob|15%, nationality|10%, supportReasons|20%';
Referral.register();
