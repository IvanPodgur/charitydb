var keystone = require('keystone');
var Types = keystone.Field.Types;

var Expensepaid = new keystone.List('Expensepaid', {
	map: { name: 'date' }

});

Expensepaid.add({
	recieptDate: { type: Types.Date, required: true, initial: true  },
	recieptDetails: {type: String, required: true, initial: true },
	method: {type: String, required: true, initial: true },
	recipetTotal: {type: String, required: true, initial: true },
	recipetFees: {type: String, required: true, initial: true },
	donation: {type: String, required: true, initial: true },


	paymentDate: { type: Types.Date, required: true, initial: true  },
	checkno: { type: String },
	eduFund: {type: String, required: true, initial: true },

	total: {type: Types.Number, required: true, initial: true},
	type: {type: String, required: true, initial: true},
	comments: {types: String}

});

Expensepaid.track = true;
Expensepaid.defaultColumns = 'details|40%, date|20%, type|20%, total|10%';
Expensepaid.register();
