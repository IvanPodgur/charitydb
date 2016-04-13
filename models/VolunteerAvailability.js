var keystone = require('keystone');
var Types = keystone.Field.Types;

var Volunteeravailability = new keystone.List('Volunteeravailability', {
	label: 'Volunteer Availability',
	autokey: { from: 'name', path: 'key', unique: true },
	map: {name: 'volunteer'}
});

Volunteeravailability.add({
	volunteer: { type: Types.Relationship, ref: 'Volunteer' },
	availableLocations: {type: Types.Textarea, initial: true },
	Availability: { type: Types.Textarea, initial: true }

});

Volunteeravailability.track = true;
Volunteeravailability.defaultColumns = 'volunteer|20%, availableLocations|30%, Availability|20%';
Volunteeravailability.register();
