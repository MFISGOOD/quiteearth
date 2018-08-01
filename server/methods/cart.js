Meteor.methods({
	'Cart.remove' : function(id){
		return Cart.remove({_id:id});
	},
	'Cart.add' : function(item){
		// check(item,{key1:String,key2: String,key3:Number});
		if(!Meteor.userId() || item.userId !== Meteor.userId() ){
			throw new Meteor.Error('Not Authorized');
		}

	    	var cartItem = Cart.findOne({product : item.product,userId:item.userId});
		if(cartItem){	
	                          return Cart.update({_id:cartItem._id},{$set :{qty:cartItem.qty + 1}});
		}else{
			return Cart.insert({userId : item.userId,product : item.product, qty : 1});
          
		}	
	}
});