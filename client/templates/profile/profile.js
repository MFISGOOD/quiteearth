Template.profile.events({
	'change .myFileInput' : function(evt,tmpl){
		FS.Utility.eachFile(evt,function(file){
			Images.insert(file,function(err,fileObj){
				if(!err){
					var userId = Meteor.userId();
					var imageurl = {
						'profile.avatar' : '/cfs/files/images/' + fileObj._id
					}
					setTimeout(function(){
						Meteor.users.update(userId,{$set:imageurl});
					});
				}
			})
		})
	}
});