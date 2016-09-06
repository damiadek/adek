$(document).ready(function(){
	// submit login form
	$("#login_form").submit(function(e){
		e.preventDefault();
		window.location.href = "../dashboard/";
		// var type = "POST",
		// 	data = $(this).serialize(),
		// 	_url = "../php/login.php",
		// 	callBack = new Login();
		// 	var ajax = new Ajax(type, _url, data, callBack);
		// 	ajax.submit();
	});

});