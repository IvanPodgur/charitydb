var keystone = require('keystone');
var Types = keystone.Field.Types;

var Supporter = new keystone.List('Supporter', {
	autokey: { from: 'name', path: 'key', unique: true },
});

Supporter.add({
	name: {type: String, required: true},
	details: {type: String, required: true },
	supports: {type: String}

});

Supporter.track = true;
Supporter.defaultColumns = 'name|20%';
Supporter.register();
