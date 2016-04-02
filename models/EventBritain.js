var keystone = require('keystone');
var Types = keystone.Field.Types;

var Eventbritain = new keystone.List('Eventbritain', {
	label: 'Events',
	autokey: { from: 'name', path: 'key', unique: true },
});

Eventbritain.add({
	date: { type: Types.Date, required: true, initial: true  },
	name: {type: String },
	location: { type: String, required: true, initial: true },
	type: {type: String},
	details: { type: String },
	totalraised: {type: Types.Number},
	comments: {types: String}

});

Eventbritain.track = true;
Eventbritain.defaultColumns = 'date|20%, name|20%, location|20%';
Eventbritain.register();
