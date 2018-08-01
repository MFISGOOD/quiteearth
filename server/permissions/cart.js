Cart.allow({
	'insert' : function(userId,doc){
		return userId && userId === Meteor.userId();
	},
	'update' : function(userId,doc){
		return userId && userId === Meteor.userId();
	},
	'remove' : function(userId,doc){
		return userId && userId === Meteor.userId();
	}
});