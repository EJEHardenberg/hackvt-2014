$(document).ready(function(){
//	$('#reveal_button').trigger('click');
	$('.reveal-modal-bg').click(function(){
		return false;
	});

    $('#showJosh').click(function(){
        $("#myModal").slideDown();
    });

    $('#hideJosh').click(function(){
        $("#myModal").fadeOut();
    });

});
