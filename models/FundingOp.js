var keystone = require('keystone');
var Types = keystone.Field.Types;

var Fundingopportunity = new keystone.List('Fundingopportunity', {
	label: 'Funding Opportunities',
	autokey: { from: 'name', path: 'key', unique: true },
	map: {name:'name'}
});

Fundingopportunity.add({
	name: { type: String, required: true, initial: true },
	project: { type: Types.Select,  options: 'Mentoring, EducationFund, India, Cambodia' , required: true, initial: true},
	website: { type: String,  initial: true },
	whatTheySupport: { type: Types.Textarea,  initial: true },
	amountTheyCanGive: { type: String,  initial: true },
	applicationDeadline: { type: String,  initial: true },
	deadlineMet: { type: Types.Select, options: 'yes, no', initial: true },
	response: { type: Types.Select, options: 'yes, no', initial: true },
	responseDate: { type: Types.Date, initial: true  },
	successful: { type: Types.Select, options: 'yes, no', initial: true },
	notesAndActions: { type: String,  initial: true }
});

Fundingopportunity.track = true;
Fundingopportunity.defaultColumns = 'name|20%, website|15%, whatTheySupport|10%, applicationDeadline|20%';
Fundingopportunity.register();
