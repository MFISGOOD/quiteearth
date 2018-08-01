Template.registerHelper('avatar',function(){
	if(Meteor.user() && Meteor.user().profile.avatar){
		return Meteor.user().profile.avatar;
	}else{
		return '/images/avatar.jpg'
	}
});
Template.registerHelper('ratings',function(comp,val){
	return val >= comp ? 'price-text-color' : ' ';
});

Template.registerHelper('currency',function(value){
console.log(value);
	return '$' + ' ' + Number(value).toFixed(2);
});

Template.registerHelper('truncate',function(inputtxt,strlen){
	var shortened = inputtxt.substring(0,strlen);
	if(shortened.length < inputtxt.length){
		shortened += '...';
	}
	return new Spacebars.SafeString(shortened);
});
 