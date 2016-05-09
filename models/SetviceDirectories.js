var keystone = require('keystone');
var Types = keystone.Field.Types;

var Servicedirectory = new keystone.List('Servicedirectory', {
	label: 'Service Direcotries',
	autokey: { from: 'name', path: 'key', unique: true },
	map: {name:'pathway'}
});

Servicedirectory.add({
	pathway: { type: String, required: true, initial: true },
	project: { type: Types.Select,  options: 'Mentoring, EducationFund, India, Cambodia', initial: true},
	nameOfProvision: { type: String, initial: true },
	address: { type: String, initial: true },
	contactInfo: { type: String, initial: true },
	criteriaAndDescription: { type: Types.Textarea, initial: true },
	notes: { type: Types.Textarea, initial: true }
});

Servicedirectory.track = true;
Servicedirectory.defaultColumns = 'pathway|25%, nameOfProvision|25%, address|25%, contactInfo|25%';
Servicedirectory.register();
