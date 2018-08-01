Template.admin.helpers({
	'categories' : function(){
           return Category.find({});
	},
	'products':function(){
		return Product.find({});
	}
});
Template.admin.events({
	'click .addProduct' : function(evt,tmpl){
		evt.preventDefault();
		var product = {};
		product.name =null;
		product.categoryId = tmpl.find('#category').value;
		product.description = tmpl.find('#description').value;
		product.price = tmpl.find('#price').value;
		product.rating = tmpl.find('#rating').value;
		// Meteor.call('Product.insert',product,function(){
			$('#productForm')[0].reset();
			$('#productname').focus();
		// });
			
		Product.insert(product,function(err,result){
			 $('.message').text(err.error).addClass('alert-danger');
		});	
		
	},
	'click .removeProduct' : function(evt,tmpl){
		Product.remove(this._id);
	}
});