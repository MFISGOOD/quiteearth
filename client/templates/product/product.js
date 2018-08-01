Template.product.events({
	'click .addToCart' : function(){
		Meteor.call('Cart.add',{userId: Meteor.userId(),product: this._id});	
	}
});