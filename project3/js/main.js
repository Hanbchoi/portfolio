$(function(){
	var n=0;
	var t=0; 
	var pos=0;
	var w;
	
	setTimeout(function(){
		$("#header").addClass("active");
		$(".controller li").eq(n).addClass("on");
	}, 1000);

	$(window).scroll(function(){
		t=$(window).scrollTop();

		if(t < $("#page1").offset().top-winHalf){
			n=0;
		}
		else if(t < $("#page2").offset().top-winHalf){
			n=1;
		}
		else if(t < $("#page3").offset().top-winHalf){
			n=2;
		}
		else if(t < $("#page4").offset().top-winHalf){
			n=3;
		}
		else if(t < $("#page5").offset().top-winHalf){
			n=4;
		}
		else{
			n=5;
		}

		categoryControl();

		$(".controller li").removeClass("on");
		$(".controller li").eq(n).addClass("on");

		if(t > 80){
			$("#header").addClass("fixed"); 
			$(".btn_top").fadeIn(300); 
		}
		else{
			$("#header").removeClass("fixed");
			$(".btn_top").fadeOut(300);
		}
	});
	$(window).trigger("resize");

	function categoryControl(){
		if($("#page5").hasClass("active") == true){
			return;
		}

		if(n == 0){
			$("#header").addClass("active");
		}
		else{
			$("#page"+n).addClass("active");
		}
	}
	
	$(".tab").click(function(e){
		e.preventDefault();
		$("body").addClass("fixed");
		$("#mobile").addClass("active");
		$(".dim").addClass("active");
		$(".close").addClass("active");
	});
	$(".close, .dim").click(function(e){
		e.preventDefault();
		$("body").removeClass("fixed");
		$("#mobile").removeClass("active");
		$(".dim").removeClass("active");
		$(".close").removeClass("active");
	});
	
	var winHalf;

	$(window).resize(function(){
		winHalf=$(window).height()/2;
		w=$(window).width();

		if(w > 720){
			if($("#mobile").hasClass("active")){
				$(".close").trigger("click");
			}
		}
	});
	$(window).trigger("resize");

	$("nav li, .controller li").click(function(e){
		e.preventDefault();
		n=$(this).index();

		if(n == 0){
			pos=$("#header").offset().top; 
		}
		else{
			pos=$("#page"+n).offset().top;
		}

		$("html").animate({scrollTop : pos}, 800);
		$("body").removeClass("fixed");
		$("#mobile").removeClass("active");
		$(".tab").removeClass("active");
		$(".dim").removeClass("active");
		$(".close").removeClass("active");
	});
	$(".btn_top").click(function(e){
		e.preventDefault();
		pos=0;
		$("html").animate({scrollTop : pos}, 800);
	});

});