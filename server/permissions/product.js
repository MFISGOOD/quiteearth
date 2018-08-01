Product.allow({
	'insert' : function(userId,doc){
		// // return true;
		// const NonEmptyString = Match.Where((x) => {
		//   check(x, String);
		//   return x.length > 0;
		// });
		// try{
		//      check(doc.name,NonEmptyString);	
		// }catch(ex){
		// 	throw new Meteor.Error("Product Name is required");
		// }
		
		return Roles.userIsInRole(userId,['admin']);
	},
	'update' : function(userId,doc){
		return Roles.userIsInRole(userId,['admin']);
	},
	'remove' : function(userId,doc){
		return Roles.userIsInRole(userId,['admin']);
	}
});