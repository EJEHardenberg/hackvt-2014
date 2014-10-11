$(document).ready(function(){
//	$('#reveal_button').trigger('click');
	$('.reveal-modal-bg').click(function(){
		return false;
	});

    $('#showJosh').click(function(){
        $("#joshpage").fadeIn();
    });

    $('#hideJosh').click(function(){
        $("#joshpage").fadeOut();
    });

});
