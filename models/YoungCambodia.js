var keystone = require('keystone');
var Types = keystone.Field.Types;

var Youngcambodia = new keystone.List('Youngcambodia', {
	label: 'Young Persons',
	autokey: { from: 'name', path: 'key', unique: true },
	map: {name:'name'}
});

Youngcambodia.add({
	name: { type: String, required: true, initial: true},
	referenceDate: { type: Types.Date, initial: true  },
	referenceAgency: {type: String, initial: true },
	intials: { type: String, initial: true },
	nationality: { type: String },
	yearsInUK: {type: Types.Number},
	dob: { type: Types.Date},
	futureEdPlace: {type: String},
	course: {types: String},
	year: {type: Types.Number},
	supportReasons: {type: String},
	amountRequested: {type: String},
	frequency: {type: String},
	startDate: {type: Types.Date},
	lastDate: {type: Types.Date},
	totalPaid: {type: String},
	outcome08to11: {type: String},
	outcome11to12: {type: String},
	outcome12to13: {type: String},
	outcome13to14: {type: String},
	outcome14to15: {type: String},
	outcome15to16: {type: String},
	outcome16: {type: String}

});

Youngcambodia.track = true;
Youngcambodia.defaultColumns = 'name|20%, dob|15%, nationality|10%, supportReasons|20%';
Youngcambodia.register();
