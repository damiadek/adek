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
    $(".profile-image .edit_cover").click(function(){
    	$("#image").click();
    });

    // replace former image with new image
	$('#image').change(function(){
		var input = this;
	    if (input.files && input.files[0]) {
	    	var reader = new FileReader();

	        reader.onload = function (e) {
	    		$('#update').attr('disabled', true);
	        	var image_type = input.files[0]['type'],
	        		type = image_type.split('/')[0],
	        		full_file_name = input.files[0]['name'],
	            	file_name = full_file_name.split('.')[0],
	            	file_extension = full_file_name.split('.')[1];

				if (type == 'image'){
	    			$('#update').attr('disabled', false);
					$('.profile-image img').attr('src', e.target.result);
				}
	    	};
	        reader.readAsDataURL(input.files[0]);
	    }
	});

	$('#update').click(function(e){
		e.preventDefault();
	});
	$('#cancel').click(function(){
		showLoading();
		$('#update').attr('disabled', false);
		$('.profile-image img').attr('src', img_src);
		$("#username").val(username);
		$("#email").val(email);
		$("#phone").val(phone_number);
		$("#DOB").val(DOB);
		$("#image").val("");
		hideLoading();
	});
});