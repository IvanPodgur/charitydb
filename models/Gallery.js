var keystone = require('keystone');
var Types = keystone.Field.Types;

var Gallery = new keystone.List('Gallery', {
	autokey: { from: 'name', path: 'key', unique: true },
	plural: 'Albums',
	singular: 'Album',
});

Gallery.add({
	name: { type: String, required: true },
	publishedDate: { type: Types.Date, default: Date.now },
	images: { type: Types.CloudinaryImages },
	test: {type:String},
	file: {type: Types.LocalFile,
			dest: 'data/files',
			prefix: '/files/',
			filename: function(item, file){
			return item.id + '.' + file.extension
			},
	format: function(item, file){
		return '<img src="/files/'+file.filename+'" style="max-width: 300px">'
		}
	}
});

Gallery.track = true;
Gallery.defaultSort = 'name';
Gallery.defaultColumns = 'name, publishedDate', 'file';
Gallery.register();
