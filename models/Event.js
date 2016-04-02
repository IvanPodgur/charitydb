var keystone = require('keystone');
var Types = keystone.Field.Types;

var Event = new keystone.List('Event', {
	autokey: { from: 'name', path: 'key', unique: true },
});

Event.add({
	date: { type: Types.Date, required: true, initial: true  },
	name: {type: String },
	location: { type: String, required: true, initial: true },
	type: {type: String},
	details: { type: String },
	totalraised: {type: Types.Number},
	comments: {types: String}

});

Event.track = true;
Event.defaultColumns = 'date|20%, name|20%, location|20%';
Event.register();
