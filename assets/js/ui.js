$(document).ready(function(){

	toggleArrow();
	navPress();
	navColor();

	$(window).scroll(function() {
		$(".dropdown-menu").hide();
		toggleArrow();
		navPress();
		navColor();
		var top = $(".navbar").offset().top;
		if (top > 300) {
			$(".m_desc_steps .col-sm-12").css({
				top: "0px",
				opacity: 1
			});
		}
		if (top > 800) {
			$.each($(".leader_item img"), function(i, this_element){
				$(this_element).fadeIn();
			});
		}
		if (top > 1600) {
			$(".sport_item").css({
				left: "0px",
				opacity: 1
			});
		}
	});

	$('#doc_arrow').click(function(e){
		e.preventDefault();
		$('html, body').stop().animate({scrollTop: 0}, 1500, 'easeInOutExpo');
	})

	// toggle login div
	$(".login_toggle").click(function(){
		$(".home_links").children(":not(:last-of-type)").removeClass("active");
		$(".home_links").children(":last-of-type").toggleClass("active");
		var $login = $(".login");
		var top = $login.css("top");
		if (top == "0px") {
			$login.fadeOut(400, function(){
				$login.animate({top: "-200%"});
			});
			return;
		}
		$login.show();
		$login.animate({top: "0px"});
	});

	// page scrolling function
	$(".page_scroll").on("click", function(e){
		var _el = $(this);
		var $login = $(".login");
		_el.siblings().removeClass("active");
		_el.addClass("active");
		e.preventDefault();
		smoothScroll(this);
		$login.fadeOut(400, function(){
			$login.animate({top: "-200%"});
		});
	});

	// accept terms and conditions
	$("#accept").change(function(){
		var checked = $(this).prop("checked");
		if (checked == true) {
			$("#reg").prop("disabled", false);
			return;
		}
		$("#reg").prop("disabled", true);
	});

	// dropdown menu
	$(".dropdown").children("a").click(function(e){
		var $this = $(this);
		$(".dropdown-menu").not($this.siblings()).fadeOut().css({"top": "110%"});
		$this.css({"background" : "rgba(245,245,245,0.8)"});
		e.preventDefault();
		$this.siblings().fadeToggle().css({"top": "102%"});
		setTimeout(function(){
			$this.css({"background" : "transparent"});
		}, 800);
	});

	// init tooltip
	$(".tip").tooltip();

	// init tooltip
	$(".slimscroll").slimscroll({
		height: "350px",
		size: "7px",
		color: "#555",
		railVisible: true
	});

	// start slideshow
	setTimeout(slideStuff(), 6000);
});

window.onload = function(){
	var window_width = $(window).innerWidth();
	if (window_width < 610 ) {
		$("ul.side-nav").children("button").click();
	}
	hideLoading();
}