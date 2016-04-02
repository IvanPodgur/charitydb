var keystone = require('keystone');
var Types = keystone.Field.Types;

var Payment = new keystone.List('Payment', {
	map: { name: 'details' }

});

Payment.add({
	date: { type: Types.Date, required: true, initial: true  },
	details: {type: String, required: true, initial: true },
	checkno: { type: String },
	total: {type: Types.Number, required: true, initial: true},
	type: {type: String, required: true, initial: true},
	comments: {types: String}

});

Payment.track = true;
Payment.defaultColumns = 'details|40%, date|20%, type|20%, total|10%';
Payment.register();
