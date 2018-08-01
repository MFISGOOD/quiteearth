Meteor.users.allow({
	insert:function(userId,doc){
		return userId;
	},
	update:function(userId,doc,fields,modifier){
		return userId && doc._id === userId;
	},
	remove:function(userId){
		return userId;
	}
});

Images.allow({
	insert : function(){
		return true;
	},
	update : function(){
		return true;
	},
	remove: function(){
		return true;
	},
	download: function(){
		return true;
	},
})