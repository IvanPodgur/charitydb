var keystone = require('keystone');
var Types = keystone.Field.Types;

var Donation = new keystone.List('Donation', {
	map: { name: 'donor' }

});

Donation.add({
	date: { type: Types.Date, required: true, initial: true  },
	project: { type: Types.Select,  options: 'Mentoring, EducationFund, India, Cambodia' , required: true, initial: true},
	donor: {type: String, required: true, initial: true },
	amount: {type: String, required: true, initial: true}

});

Donation.track = true;
Donation.defaultColumns = 'date|20%, donor|20%, amount|20%';
Donation.register();


