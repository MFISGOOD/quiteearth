
Meteor.publish('usercart',function(userId){
	// check(userId,String);
	return Cart.find({userId:this.userId});
});