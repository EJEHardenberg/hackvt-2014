$(document).ready(function(){
//	$('#reveal_button').trigger('click');
	$('.reveal-modal-bg').click(function(){
		return false;
	});

    $('#showJosh').click(function(){
    	$('#myModal').foundation('reveal', 'open');
        //$("#myModal").slideDown();
    });

    $('.content-tab').click(function(){
        $('.content-tab').removeClass("tab-active");
        $(this).addClass("tab-active");
    });

    // $('#hideJosh').click(function(){
    //     $("#myModal").fadeOut();
    // });

});
