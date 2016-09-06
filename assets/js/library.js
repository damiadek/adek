var Ajax = function(type, _url, data, callBack){
	this.type = type;
	this._url = _url;
	this.data = data;
	this.submit = function(){
		$.ajax({
			type: type,
			url: _url,
			data: data,
			success: function(msg){
				msg = JSON.parse(msg);
				callBack.action(msg);
			},
			error: function(msg){
				msg = JSON.parse(msg);
				var error = {
					error_code: msg.status,
					message: msg.statusText
				};
				hideLoading();
				$("body").append(
				    '<div class="welcome-message-wrapper" style="padding-bottom: 10px;z-index:9001;background: rgba(162, 16, 16, 0.48);">'
				        +'<i class="fa fa-exclamation-triangle text-warning fa-2x"></i> Network error '+error.error_code+': please try again later.'
				    +'</div>'
				);

				$(".welcome-message-wrapper").delay(1000).fadeIn('slow',function(){
					setTimeout(function(){$(".welcome-message-wrapper").fadeOut('slow').delay(1000).remove();}, 5000);
				});
				removeSpinner();
			}
		});
	}
},
Login = function(){
	this.action = function(msg){
		if (msg.status) {
			var data = msg.data;
			console.log(msg);
			$("body").append(
						"<form id='new_form' action='../php/session.php' method ='POST'>"
							+"<input type='text' class='hidden' name='email' value='"+data.email+"'>"
							+"<input type='text' class='hidden' name='access_token' value='"+data.access_token+"'>"
							+"<input type='text' class='hidden' name='username' value='"+data.username+"'>"
							+"<input type='text' class='hidden' name='wallet_balance' value='"+data.wallet_balance+"'>"
							+"<input type='text' class='hidden' name='image_url' value='"+data.image_url+"'>"
					   +"</form>"
				   );
			$("#new_form").submit();
			return;
		}
		errorAlert(msg.data, $("#login_form"));
	};
},
Password = function(action){
	if (action === "send") {
		this.successAction = function(msg){
        	var email_site = "http://" + $("#forgotten_password").val().split("@")[1];
            showLoading();
            $("#success_feedback").children("a").attr("href", email_site);
            $("#form_field").slideUp(400,function(){
                $("#success_feedback").slideDown();
                hideLoading();
            });
		};
		this.errorAction = function(msg){
            errorAlert("Oops, there was an error. Please try again.");
            hideLoading();
		};
	}else if (action === "verify") {
		this.successAction = function(msg){
			successAlert(msg);
			hideLoading();
		};
		this.errorAction = function(msg){
			$("<form action='index.php'></form>").submit();
		};
	}else if (action === "change") {
		this.successAction = function(msg){
			successAlert(msg);
			hideLoading();
		};
		this.errorAction = function(msg){
			$("<form action='index.php'></form>").submit();
		};
	};
	this.parseJson = function(msg){
		checkStatus(msg, this);
	};
};