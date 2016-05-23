var keystone = require('keystone');
var Types = keystone.Field.Types;

var Donation = new keystone.List('Donation', {
	map: { name: 'donor' },
	autokey: { from: 'name', path: 'key', unique: true }


});

Donation.add({
	project: { type: Types.Select,  options: 'Mentoring, EducationFund, India, Cambodia' , required: true, initial: true},
	name: {type: String, initial: true },
	contactNumber: {type: String, initial: true },
	email: {type: String, initial: true },
	address: {type: String, initial: true },
	postCode: {type: String, initial: true },
	country: {type: String, initial: true},
	dateOfDonation: { type: Types.Date, initial: true  },
	paymentMethod: {type: String, initial: true },
	frequency: {type: String, initial: true },
	amount: {type: String, initial: true}

});

Donation.track = true;
Donation.defaultColumns = 'date|20%, donor|20%, amount|20%';
Donation.register();


