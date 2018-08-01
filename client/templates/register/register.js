Template.register.events({
	'submit form' : function(evt){
		evt.preventDefault();
		var email = evt.target.email.value;
		var password = evt.target.password.value;
		var firstname = evt.target.firstname.value;
		var lastname= evt.target.lastname.value;     
		Accounts.createUser({
			email:email,
			password:password,
			firstname:firstname,
			lastname:lastname
		});
	}
});