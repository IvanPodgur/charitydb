var keystone = require('keystone');
var Types = keystone.Field.Types;

var Event = new keystone.List('Event', {
	label: 'Events',
	autokey: { from: 'title', path: 'key', unique: true },
	map: { name: 'title'}
});

Event.add({
	title: {type: String, required: true, initial: true  },
	project: { type: Types.Select,  options: 'Mentoring, EducationFund, India, Cambodia' , required: true, initial: true},
	venue: { type: String, initial: true },
	date: { type: Types.Date, initial: true},
	venue: { type: String, initial: true },
	address: { type: String,  initial: true },
	contactName: { type: String,  initial: true },
	contactEmail: { type: String, initial: true },
	contactTelephoneNo: { type: String, initial: true },
	bookingConfirmationDate: { type: String, initial: true },
	noOfParticipants: {type: Types.Number, initial: true },
	cost: {type: Types.Number, initial: true },
	notes: { type: String, initial: true  }

});

Event.track = true;
Event.defaultColumns = 'title|20%, date|20%, location|20%';
Event.register();
