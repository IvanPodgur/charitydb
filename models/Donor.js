var keystone = require('keystone');
var Types = keystone.Field.Types;

var Donor = new keystone.List('Donor', {
	map: { name: 'name' },
	path: 'Donor',
	singular: 'Donor',

});

Donor.add({
	name: {type: String, required: true, initial: true },
	frequency: { type: String, required: true, initial: true  },
	catergory: { type: Types.Select, options: 'General, EF, Mentoring, India, Cambodia', initial: true },
	amount: {type: String, required: true, initial: true}

});

Donor.track = true;
Donor.defaultColumns = 'name|20%, frequency|20%, catergory|20%';
Donor.register();
