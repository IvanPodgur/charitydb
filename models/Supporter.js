var keystone = require('keystone');
var Types = keystone.Field.Types;

var Supporter = new keystone.List('Supporter', {
	label: 'Supporters',
	autokey: { from: 'name', path: 'key', unique: true },
	map: {name: 'name'}
});

Supporter.add({
	name: { type: String, required: true,initial: true },
	contactNumber: { type: String, initial: true  },
	email: { type: Types.Email, initial: true },
	address: {type: String, initial: true },
	postCode: {type: String, initial: true },
	category: { type: Types.Select,  options: 'general, mentor, fundraiser, other(please specify)' },
	specifyIfOther: {type: String, initial: true }
});


Supporter.track = true;
Supporter.defaultColumns = 'name|20%, contactNumber|15%, category|20%';
Supporter.register();
