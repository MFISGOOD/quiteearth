// Meteor.methods({
// 	'Product.insert' : function(product){
// 			return Product.insert(product);
		
// 	},
// 	'Product.remove' : function(id){
//      		return Product.remove({_id:id});
// 	},
// 	'Product.updateHighRating' : function(id){
// 		Product.update(
//               {rating : {$gt : 3}}, //criteria
//               {$set : {rating : 5}}   //action   
// 		);
// 	} 
// });
Meteor.methods({
	'productInCart' : function(productId){
		// check(productId,String);
		return Product.findOne({_id:productId});
	}
});