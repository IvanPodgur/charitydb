const keystone = require('keystone');
const middleware = require('./middleware');
const importRoutes = keystone.importer(__dirname);

keystone.pre('routes', function (req, res, next) {
	console.log("inlinde middlerware is called")
	res.locals.navLinks = [	];
	res.locals.navLinks2 = [
		{ label: 'Home', key: 'home', href: '/' },
	];
	res.locals.user = req.user;
	next();
});

keystone.pre('render', middleware.theme);
keystone.pre('routes', middleware.initMyAuthorization);
keystone.pre('routes', middleware.initSupperAdminChecking);
keystone.pre('render', middleware.flashMessages);

keystone.set('404', function (req, res, next) {
	res.status(404).render('errors/404');
});

// Load Routes
var routes = {
	download: importRoutes('./download'),
	views: importRoutes('./views'),
};

exports = module.exports = function (app) {

	// Views
	app.all('/', routes.views.index);


	// Downloads
	app.all('/download/users', routes.download.users);

}
