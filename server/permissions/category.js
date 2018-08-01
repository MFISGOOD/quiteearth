Category.allow({
	'insert' : function(userId,doc){
		return Roles.userIsInRole(userId,['admin']);
	}
});