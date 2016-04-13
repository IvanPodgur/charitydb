var keystone = require('keystone');
var Types = keystone.Field.Types;

var Eventold = new keystone.List('Eventold', {
	label: 'Events',
	autokey: { from: 'title', path: 'key', unique: true },
});

Eventold.add({
	title: {type: String, required: true, initial: true  },
	date: { type: Types.Date, required: true, initial: true  },
	location: { type: String, required: true, initial: true },
	noOfParticipants: {type: Types.Number, initial: true },
	cost: {type: Types.Number, initial: true },
	notes: { type: String, initial: true  }

});

Eventold.track = true;
Eventold.defaultColumns = 'title|20%, date|20%, location|20%';
Eventold.register();
