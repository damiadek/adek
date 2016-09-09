
// close alert button
function closeAlert(){
	$(".alert.message").find(".fa.fa-close").off("click");
	$(".alert.message").find(".fa.fa-close").click(function(){
		$('.alert.message').slideUp();
	});
}

// display alert
function alert(d, parent, _aclass){
	parent.find('.alert.message').slideUp();
	parent.find(".alert.message").html(d + '<i class="fa fa-close pull-right"></i>');
	parent.find(".alert.message").attr("class" , _aclass).slideDown();
	closeAlert();
}

// success alert
function successAlert(data, parent){
	alert(data, parent, "alert alert-success message");
}

// error alert
function errorAlert(data, parent){
	alert(data, parent, "alert alert-danger message");
}

// display loading anim
function showLoading(){
	$('.load_cover').show();
}

// hide loading anim
function hideLoading(){
	$('.load_cover').delay(2000).fadeOut(400,function(){
		homeAnimation();
		setHeight();
	});
}

// scrolling function
function smoothScroll(link){
    var $anchor = $(link);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
    }, 1500, 'easeInOutExpo');
};

// set container height to body height
function setHeight(){
	var body_height = $(window).innerHeight();
	$(".page-wrapper, .side-nav.wrapper").css("min-height", body_height);
	body_height = $("body").height();
	$(".side-nav.wrapper").css("height", body_height);
}

// navbar color function
function navColor(){
	var top = $(".navbar").offset().top;
    if (top > 100) {
    	$("._n").removeClass("transparent").addClass("navbar-default");
	}else{
    	$("._n").addClass("transparent").removeClass("navbar-default");
	}
}

// navbar press
function navPress(){
	var top = $(document).scrollTop();

    if (top > 0) {
    	$("._m").addClass("pressed");
    }else{
    	$("._m").removeClass("pressed");
    }
}

// toggle scroll to top arrow display
function toggleArrow(){
	if ($(document).scrollTop()>250) {
		$("#doc_arrow").fadeIn();
	}
	else{
		$("#doc_arrow").fadeOut();
	}
}

// slideshow function
function slideStuff(){
	var a = 1;
	setInterval(function(){
			$(".row.slide img:not(.tick)").fadeOut(2000);
			$("#bg_" + a).fadeIn(3000);
			a++;
			if (a == 4 ){ a = 1 };
	}, 7000);
}

// animation on homepage
function homeAnimation(){
	$(".main.text").animate({left: 0}, 200, function(){
		$(".title ul li:first-of-type").delay(1000).animate({left: 0}, 200, 'easeInOutExpo', function(){
			$(".title ul li:nth-of-type(2)").delay(1000).animate({left: 0}, 200, function(){
				$(".title ul li:nth-of-type(3)").delay(1000).animate({left: 0}, 200,function(){
				});
			});
		});
	});
}

// generate months and years
var genMnthYr = function(){
	this.genMonths = function(){
		var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
		var str = "<option>Month</option>";
		var j;
		for (var i = 0; i < months.length; i++) {
			j = (i+1).toString();
			j.length == 1 ? j = 0 + j : j = j;
			str += "<option value='"+ j +"'>"+ months[i] +"</option>"
		}
		return str;
	}
	this.genYears = function(){
		var thisYear = parseInt(new Date().getFullYear());
		var years = [];
		for (var i = 0; i <= 5; i++) {
			years[i] = thisYear + i;
		}
		var str = "<option>Year</option>";
		for (var i = 0; i < years.length; i++) {
			str += "<option value='"+ years[i] +"'>"+ years[i] +"</option>"
		}
		return str;
	}
}