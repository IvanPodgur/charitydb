var keystone = require('keystone');
var Types = keystone.Field.Types;

var Eventcambodia = new keystone.List('Eventcambodia', {
	label: 'Events',
	autokey: { from: 'name', path: 'key', unique: true },
});

Eventcambodia.add({
	date: { type: Types.Date, required: true, initial: true  },
	name: {type: String },
	location: { type: String, required: true, initial: true },
	type: {type: String},
	details: { type: String },
	totalraised: {type: Types.Number},
	comments: {types: String}

});

Eventcambodia.track = true;
Eventcambodia.defaultColumns = 'date|20%, name|20%, location|20%';
Eventcambodia.register();
