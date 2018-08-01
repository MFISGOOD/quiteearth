Meteor.publish('category',function(){
	return Category.find({});
})