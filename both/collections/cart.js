Cart = new Mongo.Collection('cart');
Cart.helpers({
	cartproduct : function(){
		var product = Product.findOne({_id : this.product});
		return product;
	},	
});