window.addEventListener("load",function(){

    var header=document.getElementById("header");
    var covid=document.getElementsByClassName("covid")[0];
    var covid_close=covid.lastElementChild;

	var gnb=document.getElementById("gnb");
	var gnbUl=gnb.firstElementChild;
	var dep1Li=gnbUl.children;
	var search_pop=document.getElementsByClassName("search_pop")[0];
	var pop_inner=search_pop.firstElementChild;
	var pop_close=pop_inner.lastElementChild;

	covid_close.addEventListener("click",function(){
		covid.classList.add("cancle");
		header.classList.add("cancle");
	});

	dep1Li[0].firstElementChild.addEventListener("click",function(e){
		e.preventDefault();
		if(dep1Li[0].classList.contains("active") == false){
			dep1Li[0].classList.add("active");
		}
		else{
			dep1Li[0].classList.remove("active");
		}
	});
	pop_close.addEventListener("click", function(e){
		e.preventDefault();
		dep1Li[0].classList.add("active");
	});

	$(function(){
	// $(".covid .close").click(function(){
	// 	$(".covid").addClass("cancle");
	// 	$("#header").addClass("cancle");
	// });
	
	 $(window).scroll(function(){
	 	if(0 < $(window).scrollTop()){
			$("#gnb li").addClass("active");
		}
		if(45 < $(window).scrollTop()){
			$(".menu_zone").addClass("on");
		}
		else{
			$(".menu_zone").removeClass("on");
		}
	
	});
	
	$("span.ko").click(function(e){
		e.preventDefault();
		if($(".lang ul").is(":visible")){
		$(".lang ul").slideUp();
		}
		else{
			$(".lang ul").slideDown();
		}
	});

	
	$(".lang dt a").focusin(function(){
		$(".lang ul").slideDown(300);
	});
	$(".lang dd li:last-child a").focusout(function(){
		$(".lang ul").slideUp(300);
	});
	
	// $("#gnb > ul > li > a").click(function(e){
	// 	e.preventDefault();
	// 	$(".search_pop").slideToggle(300);
	// });

	// $(".search_pop .close").click(function(e){
	// 	e.preventDefault();
	// 	$(".search_pop").slideUp(300);
	// });

	$("#gnb > ul > li").hover(
	function(){
		$(this).children().addClass("over");
		$(this).addClass("over");

	},
	function(){
		$(this).children().removeClass("over");
		$(this).removeClass("over");
	});
	$("#gnb .sub a").hover(
	function(){
		$(this).addClass("over");
	},
	function(){
		$(this).removeClass("over");
	});

	$("#gnb > ul > li:nth-child(2) > a").focusin(function(){
		$(this).next().addClass("over");
		$(this).addClass("over");
	});
	$("#gnb li li:last-child li:last-child a").focusout(function(){
		$("#gnb .sub").removeClass("over");
		$("#gnb li:nth-child(2) a").removeClass("over");
	});
	$("#gnb > ul > li:nth-child(3) > a").focusin(function(){
		$(this).next().addClass("over");
		$(this).addClass("over");
	});
	$("#gnb li li:last-child li:last-child a").focusout(function(){
		$("#gnb .sub").removeClass("over");
		$("#gnb li:nth-child(3) a").removeClass("over");
	});

	var swiper = new Swiper(".mySwiper", {
		speed: 1200,
		loop:true,
		
		autoplay: {
			delay: 5000, 
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true
		},
		navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
	});
	$(".play").click(function(e){
		e.preventDefault();
		swiper.autoplay.start();
	});
	$("#pause_play").click(function(e){
		e.preventDefault();
		if($(this).hasClass("play")){ 
			$(this).removeAttr("class"); 
			$(this).addClass("pause"); 
			$(this).text("pause"); 
			swiper.autoplay.start(); 
		}
		else{ 
			$(this).removeAttr("class");
			$(this).addClass("play");
			$(this).text("play");
			swiper.autoplay.stop();
		}
	});

var galleryw=1100;
	var galleryAmount=0;
	// var id=setInterval(rightMoving, 5000);

	$(".gallery .controls .left").click(function(e){
		e.preventDefault();
		if(!$(".gallery ul").is(":animated")) rightMoving();
	});
	$(".gallery .controls .right").click(function(e){
		e.preventDefault();
		if(!$(".gallery ul").is(":animated")) leftMoving();
	});
	$(".gallery .controls .left, .gallery .controls .right").hover(
		function(){
			clearInterval(id);
		},
		function(){
			id=setInterval(rightMoving, 6000);
		}
	);

	function leftMoving(){
		galleryAmount-=galleryw;

		$(".gallery ul").animate({left:galleryAmount}, 600, function(){
			$(this).append($(".gallery ul li:first-child"));
			galleryAmount+=galleryw;
			$(this).css({left:galleryAmount});

			$(".gallery li").each(function(n){
				if(n == 1){
					$(this).addClass("active");
				}
				else{
					$(this).removeClass("active");
				}
			});
		});
	}
	function rightMoving(){
		$(".gallery ul").prepend($(".gallery ul li:last-child"));

		galleryAmount-=galleryw;
		$(".gallery ul").css({left:galleryAmount});
		galleryAmount+=galleryw;

		$(".gallery ul").animate({left:galleryAmount}, 600, function(){
			$(".gallery li").each(function(n){
				if(n == 1){
					$(this).addClass("active");
				}
				else{
					$(this).removeClass("active");
				}
			});
		});
	}
	var t;
	$(window).scroll(function(){
		t=$(window).scrollTop();
		if(t > $("#page4").offset().top-300){
			$(".banner_zone li").addClass("show")
		}
	});

});
});
