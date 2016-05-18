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
		DOB: { type: Types.Date},
		nationality: { type: String },
		languages: {type: Types.Textarea},
		religion: { type: String },
		immigrationStatus: { type: String },
		timeSpentInUK: {type: String},
		workPermit: { type: Types.Select,  options: 'yes, no'},
		qualifications: {type: String}
	},'Education fund', {
		currentEducationalPlacement: { type: String },
		futureEducationalPlacement: { type: String },
		courseType: {type: String},
		courseGrade: {type: String},
		courseYear: {type: String},
		reasonForFunding: {type: String},
		amountRequested: {type: String},
		frequency: {type: String},
		startDate: {type: Types.Date},
		lastDate: {type: Types.Date},
		totalPaid: {type: String},
		outcome: {type: Types.Textarea}
	},'Mentoring details', {
		scaleOfVulnerability: { type: Types.Select,  options: '1, 2, 3, 4, 5'},
		supportNeeds: {type: String},
		medicalNeeds: {type: String},
		availability: {type: String},
		volunteerPreferences: {type: String},
		mentorName: {type: String},
		mentoringStartDate: {type: Types.Date},
		mentoringEndDate: {type: Types.Date},
		mentoringLocation: {type: String},
		mentoringFrequency: {type: String},
		sessionLength: {type: String},
		lastDate: { type: Types.Date},
		personalDevPlanMnth1: { type: Types.Select,  options: 'yes, no' },
		personalDevPlanMnth2: { type: Types.Select,  options: 'yes, no'  },
		personalDevPlanMnth3: { type: Types.Select,  options: 'yes, no'  },
		outcome: {type: Types.Textarea}
	},'India Specific Details', {
		caste: { type: String },
		fathersName: {type: String},
		fatherProfession: {type: String },
		fatherAnualSalary: {type: String },
		mothersName: {type: String },
		motherProfession: {type: String },
		motherAnualSalary: {type: String },
		numberOfSiblings: {type: String }
	});

Referral.track = true;
Referral.defaultColumns = 'name|20%, dob|15%, nationality|10%, supportReasons|20%';
Referral.register();
