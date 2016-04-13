var keystone = require('keystone');
var Types = keystone.Field.Types;

var Fundraisingevent = new keystone.List('Fundraisingevent', {
	label: 'Fundraising Events',
	autokey: { from: 'name', path: 'key', unique: true },
});

Fundraisingevent.add({
	date: { type: Types.Date, required: true, initial: true  },
	name: {type: String, required: true, initial: true  },
	location: { type: String, required: true, initial: true },
	noOfParticipants: {type: Types.Number, initial: true },
	cost: {type: Types.Number, initial: true },
	notes: { type: String, initial: true  }

});

Fundraisingevent.track = true;
Fundraisingevent.defaultColumns = 'name|20%, date|20%, location|20%';
Fundraisingevent.register();
