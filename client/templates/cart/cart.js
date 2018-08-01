Template.cart.helpers({
	'cartitems' : function(user){
		return Cart.find({userId:user._id});
	}
});
Template.cart.events({
	'click .checkOutBtn' : function(evt,tmpl){
		Session.set('isCheckingOut',true);
	},
	'click .delFromCart' : function(evt,tmpl){
		deleteFromCart(this._id)
	}
});
function deleteFromCart(id){
	Meteor.call('Cart.remove',id);
}
// Template.cart.onCreated(function(){
// 	//add your statement here
// 	Meteor.subscribe('usercart',Meteor.userId());
// });
