var keystone = require('keystone');
var Types = keystone.Field.Types;

var Expensepaid = new keystone.List('Expensepaid', {
	map: { name: 'date' }

});

Expensepaid.add({
	name: {type: String, required: true, initial: true },
	faresAndTravelling: {type: String, initial: true },
	foodAndDrink: {type: String, initial: true },
	mentoringResources: {type: String, initial: true },
	postageAndTelephone: {type: String, initial: true },
	otherExpenses: {type: String, initial: true },
	nonReclaimableVAT: {type: String, initial: true },
	reaclaimableVAT: {type: String, initial: true },
	total: {type: String, initial: true }

});

Expensepaid.track = true;
Expensepaid.defaultColumns = 'details|40%, date|20%, type|20%, total|10%';
Expensepaid.register();
