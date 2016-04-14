var keystone = require('keystone');
var Types = keystone.Field.Types;

var Volunteeravailability = new keystone.List('Volunteeravailability', {
	label: 'Volunteer Experience',
	autokey: { from: 'name', path: 'key', unique: true },
	map: {name: 'volunteer'}
});

Volunteeravailability.add({
	volunteer: { type: Types.Relationship, ref: 'Volunteer' },
	availableLocations: {type: Types.Textarea, initial: true },
	Availability: { type: Types.Textarea, initial: true },
	skills: {type: Types.Textarea, initial: true },
	OtherLanguages: {type: String, initial: true, many: true },
	linksWithOrganisations: {type: String, initial: true },
	Experience: {type: Types.Number, initial: true }



});

Volunteeravailability.track = true;
Volunteeravailability.defaultColumns = 'volunteer|15%, availableLocations|25%, skills|25%, OtherLanguages|10%, linksWithOrganisations|10%  Availability|15%';
Volunteeravailability.register();
