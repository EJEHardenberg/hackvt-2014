$(document).ready(function(){
//	$('#reveal_button').trigger('click');
	$('.reveal-modal-bg').click(function(){
		return false;
	});

    $('#showJosh').click(function(){
    	$('#myModal').foundation('reveal', 'open');
        //$("#myModal").slideDown();
    });

    // $('#hideJosh').click(function(){
    //     $("#myModal").fadeOut();
    // });

});
