var _ = require('lodash');

exports.theme = function (req, res, next) {
	if (req.query.theme) {
		req.session.theme = req.query.theme;
	}
	res.locals.themes = [
		'Bootstrap',
		'Cerulean',
		'Cosmo',
		'Cyborg',
		'Darkly',
		'Flatly',
		'Journal',
		'Lumen',
		'Paper',
		'Readable',
		'Sandstone',
		'Simplex',
		'Slate',
		'Spacelab',
		'Superhero',
		'United',
		'Yeti',
	];
	res.locals.currentTheme = req.session.theme || 'Bootstrap';
	next();
};

function intersect(a, b) {
    var d = {};
    var results = [];
    for (var i = 0; i < b.length; i++) {
        d[b[i]] = true;
    }
    for (var j = 0; j < a.length; j++) {
        if (d[a[j]]) 
            results.push(a[j]);
    }
    if(results.length>0){
    	return true;
    }else{
    	return false;
    }
}

exports.initMyAuthorization = function(req, res, next) {

	console.log("middleware STARTED");
	var useMyAuthorization = true;
	if(useMyAuthorization){
		var managePathOrItem = true; // true-- un authorized user can not see the list, false un authorized user can not access item page
		var rules = [
			{path:"XxObj",roles:['aa']},
			{path:"testobjpath",roles:['cc','xx','zz']},
			{path:"donor",roles:['cc','xx','zz']},
			

		];

		var result_can_next = true;

		for(var i = 0; i<rules.length;i++){
			if(managePathOrItem){
				console.log("Here is the req path")
				console.log(req.path)
				console.log("we match it against")
				console.log("/keystone/" + rules[i].path)
				var indexOfListURL = req.path.indexOf("/keystone/" + rules[i].path);

				if(indexOfListURL == 0){
					console.log("rules[i].roles------" + rules[i].roles);
					console.log("req.user.roles------" + req.user.roles);
					if(intersect(rules[i].roles, req.user.roles)){
						console.log("------intersected");
						// next();
						break;
					}else{
						result_can_next = false;
						var err = new Error('Your acount cannot access this data!');
						next(err);
						break;
					}
				}
			}else{
				var indexOfListURL = req.path.indexOf("/keystone/" + rules[i].path);
				var itemURL = "/keystone/" + rules[i].path + "/";
				if(indexOfListURL == 0 && req.path.length > itemURL.length){
					if(intersect(rules[i].roles,req.user.roles)){
						// next();
						break;
					}else{
						result_can_next = false;
						var err = new Error('Your acount cannot access this data!');
						next(err);
						break;
					}
				}

				//fix bug of unauthorized use can create object if the authorisation control is on "item"
				//block POST http://localhost:3000/keystone/testobjpath/  -- for "create" operation
				//1.if you want to do create operation,  you must POST a request a url like: /keystone/xxobj/
				//2. I will check, if you don't have right to do operations with this  xxobj,
				//3. throw error.
				//Currently keystone do creating by posting to list url
				// but do deleting by getting keystone/api/xxobj/delete.
				// They didn't manage all of these RESTful api well, so my code is also ugly here:
				if(req.path == ("/keystone/" + rules[i].path) || req.path == ("/keystone/" + rules[i].path + "/")){
					if(!intersect(rules[i].roles,req.user.roles)){
						if(req.method.toLowerCase() !=  "get"){
							result_can_next = false;
							var err = new Error('Your acount cannot do this Operation!');
							next(err);
							break;
						}
					}
				}

				//http://localhost:3000/keystone/api/testobjpath/delete?id=54d33fad95e28a5c039335b3&_csrf=xf4aFWa51o%2FycPG32O39ksMniGLeGX90Gmbl8%3D
				//fix bug of unauthorized use can delete object if the authorisation control is on "item"
				var indexOfDeleteItemURL = req.path.indexOf("/keystone/api/" + rules[i].path + "/delete");
				if(indexOfDeleteItemURL == 0 ){
					if(!intersect(rules[i].roles,req.user.roles)){
						result_can_next = false;
						var err = new Error('Your acount cannot do delete Operation!');
						next(err);
						break;
					}
				}
			}
		}
		if(result_can_next){
			next();
		}
	}else{
		next();
	}
};

// to user this you should make sure you didn't change user table's path.
//if you did, please use initMyAuthorization to manage your user table.
exports.initSupperAdminChecking = function(req, res, next) {
	console.log("middleware 222 STARTED");

	// console.log("req.user = " + req.user);
	// if(req.path == "/keystone/users" || req.path == "/keystone/users/"){
	// 	if(req.user.isSupperAdmin){
	// 		next();
	// 	}else{
	// 		var err = new Error('need supper user');
	// 		next(err);
	// 	}
	// }else{
	// 	next();
	// }
	var managePathOrItem = false; // true-- un authorized user can not see the list, false un authorized user can not access item page
	var indexOfUsersURL = req.path.indexOf("/keystone/users");
	if(managePathOrItem){
		//solution for :  blocking common users accessing all user management pages including list and item pages.
		if(indexOfUsersURL == 0){
			if(req.user.isSupperAdmin){
				next();
			}else{
				var err = new Error('A supper admin account is needed!');
				next(err);
			}
		}else{
			next();
		}
	}else{


				//fix bug of unauthorized use can create object if the authorisation control is on "item"
				//block POST http://localhost:3000/keystone/testobjpath/  -- for "create" operation
				//1.if you want to do create operation,  you must POST a request a url like: /keystone/xxobj/
				//2. I will check, if you don't have right to do operations with this  xxobj,
				//3. throw error.
				//Currently keystone do creating by posting to list url
				// but do deleting by getting keystone/api/xxobj/delete.
				// They didn't manage all of these RESTful api well, so my code is also ugly here:
				if(req.path == "/keystone/users" || req.path == "/keystone/users/"){
					if(!req.user.isSupperAdmin){
						if(req.method.toLowerCase() !=  "get"){
							var err = new Error('Your acount cannot do this Operation! A supper Admin user is needed!');
							next(err);
							return;
						}
					}
				}

				//http://localhost:3000/keystone/api/testobjpath/delete?id=54d33fad95e28a5c039335b3&_csrf=xf4aFWa51o%2FycPG32O39ksMniGLeGX90Gmbl8%3D
				//fix bug of unauthorized use can delete object if the authorisation control is on "item"
				var indexOfDeleteItemURL = req.path.indexOf("/keystone/api/users/delete");
				if(indexOfDeleteItemURL == 0 ){
					if(!req.user.isSupperAdmin){
						var err = new Error('Your acount cannot do delete Operation! A supper Admin user is needed!');
						next(err);
						return;
					}
				}


		//solution for : non super user can only change her/his account.
		if(indexOfUsersURL == 0 && req.path.length > "/keystone/users/".length){
			if(req.user.isSupperAdmin){ //super user  
				next();
			}else if(req.path == "/keystone/users/" + req.user._id){// for current user
				next();
			}else{
				var err = new Error('You can only manage your account. To manage other accounts you need a supper admin account.');
				next(err);
			}
		}else{
			next();
		}
	}
};

exports.flashMessages = function (req, res, next) {
	var flashMessages = {
		info: req.flash('info'),
		success: req.flash('success'),
		warning: req.flash('warning'),
		error: req.flash('error')
	};
	res.locals.messages = _.any(flashMessages, function (msgs) { return msgs.length }) ? flashMessages : false;
	next();
};
