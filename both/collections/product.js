Product = new Mongo.Collection('product');
Product.helpers({
	'category' : function(){
		return Category.findOne(this.categoryId);
	},
	image: function(){
		if(this.img){
			return this.img;
		}else{
			return '/images/appel-crisp.png';
		}
	}

	
});
// Product.attachSchema(new SimpleSchema({
// 	name: {
// 		type:String,
// 		label : "Product Name",
// 		max : 20
// 	},
// 	categoryId:{
// 		type: String,
// 		label: "Category"
// 	},
// 	description : {
// 		type : String,

// 	},
// 	price : {
// 		type : Number
// 	},
// 	rating : {
// 		type: Number
// 	},
// 	_id :{
// 		type : String
// 	}
// }));