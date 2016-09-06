$(document).ready(function(){
	// generate years and months
	var _gmy = new genMnthYr();
	var month_options = _gmy.genMonths();
	$("#month_list").html('');
	$("#month_list").html(month_options);
	var year_options = _gmy.genYears();
	$("#year_list").html('');
	$("#year_list").html(year_options);

	// toggle sidebar width
	$("ul.side-nav").children("button").click(function(){
		$(this).toggleClass("fa-angle-double-left").toggleClass("fa-angle-double-right");
		var nav = $(".side-nav.wrapper");
		var position = nav.css("position");
		var padding = parseInt($("body").css("padding-left"));
		if (position === "relative") {
			padding == 200 ? $('body').css({"padding-left" : "50px"}) : $('body').css({"padding-left" : "200px"});
		}
		nav.toggleClass("compressed");
		setHeight();
	});

});