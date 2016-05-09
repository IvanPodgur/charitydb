var keystone = require('keystone');
var Types = keystone.Field.Types;

var Expensepaid = new keystone.List('Expensepaid', {
	label:  "Expenses",
	map: { name: 'name' }

});

Expensepaid.add({
	name: {type: String, required: true, initial: true },
	project: { type: Types.Select,  options: 'Mentoring, EducationFund, India, Cambodia' , required: true, initial: true},
	faresAndTravelling: {type: String, initial: true },
	foodAndDrink: {type: String, initial: true },
	resources: {type: String, initial: true },
	postageAndTelephone: {type: String, initial: true },
	otherExpenses: {type: String, initial: true },
	nonReclaimableVAT: {type: String, initial: true },
	reaclaimableVAT: {type: String, initial: true },
	total: {type: String, initial: true },
	recieptDetails: {type: String, initial: true },
	method: {type: String, initial: true },
	recipetTotal: {type: String, required: true, initial: true },
	recipetFees: {type: String, required: true, initial: true },
	paymentDate: { type: Types.Date, required: true, initial: true  },
	checkno: { type: String },
	eduFund: {type: String, required: true, initial: true },
	type: {type: String, initial: true},
	comments: {types: String}

});

Expensepaid.track = true;
Expensepaid.defaultColumns = 'name|20%, total|20%, recieptsNotes|40%';
Expensepaid.register();
