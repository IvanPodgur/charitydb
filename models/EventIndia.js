var keystone = require('keystone');
var Types = keystone.Field.Types;

var Eventindia = new keystone.List('Eventindia', {
	label: 'Events',
	autokey: { from: 'name', path: 'key', unique: true },
});

Eventindia.add({
	date: { type: Types.Date, required: true, initial: true  },
	name: {type: String },
	location: { type: String, required: true, initial: true },
	type: {type: String},
	details: { type: String },
	totalraised: {type: Types.Number},
	comments: {types: String}

});

Eventindia.track = true;
Eventindia.defaultColumns = 'date|20%, name|20%, location|20%';
Eventindia.register();
