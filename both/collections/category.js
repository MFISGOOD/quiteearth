Category= new Mongo.Collection('cartegory');
Category.before.insert(function(userId,doc){
	doc.createdAt = Date.now();
	doc.rating = 0;
});

