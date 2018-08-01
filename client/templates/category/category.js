// Template.category.onCreated(function(){
// 	this.subscribe('product');
// });
Session.setDefault('isCheckingOut',false);
Template.category.helpers({
	'categoryName':function(){
		return FlowRouter.getParam('categoryName');
	},
	categoryProducts : function(categoryName){
		var categoryId = Category.findOne({name:categoryName})._id;
		return Product.find({categoryId:categoryId });
	},
	'isCheckingOut': function(){
		return Session.equals('isCheckingOut',true);
	}
});

function addCategory(category){
		var exists = Category.findOne({name: category.name});
		if(!exists){
			return Category.insert(category);
		}
}
Template.categoryAdmin.events({
	'click .addCategory' : function(event,template){
		event.preventDefault();
		var category = {};
		category.name = template.find('#categoryName').value;
		// Meteor.call('addCategory',category,function(){
		// 		$('#categoryForm')[0].reset();
		// });
		addCategory(category);
	}
});