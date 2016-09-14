$(document).ready(function(){
	var username = $("#username").val();
	var email = $("#email").val();
	var phone_number = $("#phone").val();
	var DOB = $("#DOB").val();
	var img_src = $('.profile-image img').attr('src');

	// init datepicker
	$("#DOB").datepicker({
        orientation: "top auto",
        autoclose: true
    });

	// change image
    $(".profile-image #change").click(function(e){
    		$("#image").click();
    });

    // profile image options
    $("span.option").hover(function(){
    	$("#desc").html($(this).children("i").attr("title"));
    },function(){
    	$("#desc").html('');
    });

    // profile image options toggle
    $("#toggle_change").click(function(){
    	$(".edit_cover").fadeToggle();
    	var text = $("#toggle_change").text();
		$('.profile-image img').attr('src', img_src);
    	text == "Change Image" ? $("#toggle_change").text("Cancel") : $("#toggle_change").text("Change Image");
    });

    // replace former image with new image
	$('#image').change(function(){
		var input = this;
	    if (input.files && input.files[0]) {
	    	var reader = new FileReader();

	        reader.onload = function (e) {
	        	var image_type = input.files[0]['type'],
	        		type = image_type.split('/')[0],
	        		full_file_name = input.files[0]['name'],
	            	file_name = full_file_name.split('.')[0],
	            	file_extension = full_file_name.split('.')[1];

				if (type == 'image'){
					$('.profile-image img').attr('src', e.target.result);
				}
	    	};
	        reader.readAsDataURL(input.files[0]);
	    }
	});

	$('#update').click(function(e){
		e.preventDefault();
		img_src = $(".profile-image img").attr("src");
    	$(".edit_cover").fadeOut();
		$("#toggle_change").text("Change Image");
	});

	$('#undo').click(function(){
		$('.profile-image img').attr('src', img_src);
    	$(".edit_cover").fadeOut();
	});

	$(".save").click(function(){
		var $this = $(this);
		$this.parent().prev().children("span").text($this.siblings("input").val());
	});

	$(".cancel").click(function(){
		var $this = $(this);
		var $sib = $this.siblings("input");
		$sib.val($this.parent().prev().children("span").text());
	});

	$(".prev a").click(function(e){
		e.preventDefault();
		var $this = $(this);
		$this.parent().fadeOut().next().addClass("open");
	});

	$(".input-group-addon.after").click(function(){
		$(this).parent().removeClass("open").prev().fadeIn();
	});
});