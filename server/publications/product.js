Meteor.startup(function(){
	Product._ensureIndex({'cateroryId' : 1});
});
Meteor.publish('products',function(){
	return Product.find({});
});

// Meteor.publish('categoryProducts',function(categoryName){
// 	var  categoryId = Category.findOne({name:categoryName})._id;
	
// 	return Product.find({categoryId : categoryId});
// });