Meteor.startup(() => {
  // code to run on server at startup
  Accounts.onCreateUser(function(options,user){
  	if(!user.profile){
  		user.profile={};
  	}
  	user.profile.firstname = options.firstname;
  	user.profile.lastname = options.lastname;
  	user.profile.email = options.email;
  	user.profile.password = options.password;
	return user;  
  });
  var users = Meteor.users.find().fetch();
  _.each(users,function(userData){
  	if(userData.emails[0].address === 'admin@example.com'){
  		Roles.addUsersToRoles(userData, ['admin']);
  	}
  });
});
//add admin user
// Meteor.methods({
// 	'admin' : function(userId){
// 		return Roles.addUsersToRoles(userId, 'admin', Roles.GLOBAL_GROUP)
// 	}
// });
