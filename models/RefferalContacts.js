var keystone = require('keystone');
var Types = keystone.Field.Types;

var Referralcontact = new keystone.List('Referralcontact', {
	label: 'Referral Contacts',
	autokey: { from: 'name', path: 'key', unique: true },
	map: {name:'name'}
});

Referralcontact.add({
	name: { type: String, required: true, initial: true },
	category: { type: String, required: true, initial: true },
	contactName: { type: String, required: true, initial: true },
	contactRole: { type: String, initial: true },
	contactEmail: { type: String, initial: true },
	contactNumber: { type: String, initial: true },
	contactAddress: { type: String, initial: true },
	dateOfFirstContact: { type: Types.Date, initial: true  },
	response: { type: Types.Select, options: 'yes, no', initial: true },
	futurePotential: { type: Types.Select, options: 'yes, no', initial: true },
	notesAndActions: { type: String }
});

Referralcontact.track = true;
Referralcontact.defaultColumns = 'name|20%, dob|15%, nationality|10%, supportReasons|20%';
Referralcontact.register();
