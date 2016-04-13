var keystone = require('keystone');
var Types = keystone.Field.Types;

var Mentorevent = new keystone.List('Mentorevent', {
	label: 'Mentoring Events',
	plural: 'Mentoring Events',
	autokey: { from: 'name', path: 'key', unique: true },
});

Mentorevent.add({
	date: { type: Types.Date, required: true, initial: true  },
	name: {type: String, required: true, initial: true  },
	location: { type: String, required: true, initial: true },
	noOfParticipants: {type: Types.Number, initial: true },
	cost: {type: Types.Number, initial: true },
	notes: { type: String, initial: true  }

});

Mentorevent.track = true;
Mentorevent.defaultColumns = 'name|20%, date|20%, location|20%';
Mentorevent.register();
