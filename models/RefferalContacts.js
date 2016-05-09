var keystone = require('keystone');
var Types = keystone.Field.Types;

var Referralcontact = new keystone.List('Referralcontact', {
	label: 'Referral Contacts',
	autokey: { from: 'name', path: 'key', unique: true },
	map: {name:'name'}
});

Referralcontact.add({
	name: { type: String, required: true, initial: true },
	project: { type: Types.Select,  options: 'Mentoring, EducationFund, India, Cambodia' , required: true, initial: true},
	category: { type: String, required: true, initial: true },
	contactName: { type: String, required: true, initial: true },
	contactRole: { type: String, initial: true },
	contactEmail: { type: String, initial: true },
	contactNumber: { type: String, initial: true },
	contactAddress: { type: String, initial: true },
	dateOfFirstContact: { type: Types.Date, initial: true  },
	dateOfLastContact: { type: Types.Date, initial: true  },
	response: { type: Types.Select, options: 'yes, no', initial: true },
	futurePotential: { type: Types.Select, options: 'yes, no', initial: true },
	notesAndActions: { type: Types.Textarea,initial: true  }
});

Referralcontact.track = true;
Referralcontact.defaultColumns = 'name|20%, category|15%, contactName|10%, futurePotential|10%';
Referralcontact.register();
