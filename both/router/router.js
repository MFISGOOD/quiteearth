FlowRouter.route(['/','/home'],{
	subscriptions : function(){
		// Meteor.subscribe('category');
		this.register('categoriesList',Meteor.subscribe('category'));
		this.register('usercart',Meteor.subscribe('usercart',Meteor.userId()));	
		this.register('products',Meteor.subscribe('products'));
	},
	action:function(){
		console.log('Running Action to render templates into layouts.');
		FlowLayout.render('layout',{sidebar:'sidebar',main:'home',cart:'cart'})	
	}
});
FlowRouter.route('/admin',{
	subscriptions : function(){
		// Meteor.subscribe('category');
		this.register('categoriesList',Meteor.subscribe('category'));
		this.register('productsList',Meteor.subscribe('products'));
	},
	action:function(){
		if(Roles.userIsInRole(Meteor.userId(),['admin'])){
			FlowLayout.render('layout',{sidebar:'',main:'admin',cart:''})	
		}else{
			FlowLayout.render('layout',{sidebar:'',main:'unauthorized',cart:''})	
		}		
	}
});
FlowRouter.route('/register',{
	action:function(){
		FlowLayout.render('layout',{sidebar:'',main:'register',cart:''})	
	}
});
FlowRouter.route('/signin',{
	action:function(){
		FlowLayout.render('layout',{sidebar:'',main:'signin',cart:''})	
	}
});
FlowRouter.route('/signout',{
	action:function(){
		Meteor.logout(function(err){
             if(!err){
             	FlowRouter.go('/signin')
             }
		});
	}
});
FlowRouter.route('/profile',{
	action: function(){
		FlowLayout.render('layout',{sidebar:'',main:'profile',cart:''});
	}
})
FlowRouter.route('/checkout',{
	action:function(){
		FlowLayout.render('layout',{sidebar:'',main:'checkout',cart:''})	
	}
});
FlowRouter.route('/category/:categoryName',{
	subscriptions:function(params){
		this.register('catlist',Meteor.subscribe('category'));
		// this.register('catproducts',Meteor.subscribe('categoryProducts',params.categoryName));
		this.register('usercart',Meteor.subscribe('usercart',Meteor.userId()));	
		this.register('products',Meteor.subscribe('products'));	

		//make sure subscriptions exist
	},
	triggersEnter:function(params){
                    console.log('ENTER',params);
                    //check that user is logged in
	},
	triggersExist:function(params){
           	console.log('EXIT',params);
           	//check that there is no unsaved data
	},
	action:function(){
		console.log('Running Action to render templates into layouts.');
		FlowLayout.render('layout',{sidebar:'sidebar',main:'category',cart:'cart'})	
	}
});
