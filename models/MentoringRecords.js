var keystone = require('keystone');
var Types = keystone.Field.Types;

var Mentoringrecord = new keystone.List('Mentoringrecord', {
	label: 'Mentoring Records',
	autokey: { from: 'name', path: 'key', unique: true }
});

Mentoringrecord.add({
	volunteer: { type: Types.Relationship, ref: 'Volunteer', initial: true },
	youngPerson: { type: Types.Relationship, ref: 'Referral', initial: true  },
	project: { type: Types.Select,  options: 'Mentoring, EducationFund, India, Cambodia' , required: true, initial: true},
	startDate: { type: Types.Date, initial: true },
	mentoringLocation: { type: String, initial: true },
	mentoringFrequency: { type: String, initial: true },
	mentoringDay: { type: String, initial: true },
	sessionLength: { type: String, initial: true },
	lastDate: { type: Types.Date, initial: true }

});

Mentoringrecord.track = true;
Mentoringrecord.defaultColumns = 'volunteer|20%, youngPerson|15%, startDate|10%, sessionLength|20%, lastDate|10%';
Mentoringrecord.register();
