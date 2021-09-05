window.addEventListener("load",function(){

    var header=document.getElementById("header");
	var [top, menu_zone]=header.children;
    var covid=document.getElementsByClassName("covid")[0];
    var covid_close=covid.lastElementChild;

	var gnb=document.getElementById("gnb");
	var gnbUl=gnb.firstElementChild;
	var dep1Li=gnbUl.children;
	var search_pop=document.getElementsByClassName("search_pop")[0];
	var pop_inner=search_pop.firstElementChild;
	var pop_close=pop_inner.lastElementChild;

	var pause_play=document.getElementById("pause_play");

	var page4=document.getElementById("page4");
	var [title, banner_zone, news, bottom]=page4.children;
	var banner_zoneUl=banner_zone.firstElementChild;
	var banner_zoneLi=banner_zoneUl.children;



	covid_close.addEventListener("click",function(){
		covid.classList.add("cancle");
		header.classList.add("cancle");
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
	
	pause_play.addEventListener("click",function(e){
		e.preventDefault();
		if(e.currentTarget.classList.contains("play")){
			e.currentTarget.removeAttribute("class");
			e.currentTarget.classList.add("pause");
			e.currentTarget.innerText="pause";
			swiper.autoplay.start();
		}
		else{ 
			e.currentTarget.removeAttribute("class");
			e.currentTarget.classList.add("play");
			e.currentTarget.innerText="play";
			swiper.autoplay.stop();
		}
		
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
		dep1Li[0].classList.remove("active");
	});

	window.addEventListener("scroll",function(){
		var t=window.pageYOffset;
		if(0 < t){
			dep1Li[0].classList.add("active");
		}
		if(45 < t){
			menu_zone.classList.add("on");
		}
		else{
	 		menu_zone.classList.remove("on");
		}
		if(page4.offsetTop-300 < t){
			for(var i=0; i<banner_zoneLi.length; i++){
				banner_zoneLi[i].classList.add("show");
			}
		}
	});
	var scrollTrigger=document.createEvent("UiEvent");
	scrollTrigger.initEvent("scroll");			 	
	window.dispatchEvent(scrollTrigger);

	for(var i=0; i<dep1Li.length; i++){
		dep1Li[i].addEventListener("mouseover",function(e){
			e.currentTarget.classList.add("over");	
		});
		dep1Li[i].addEventListener("mouseleave",function(e){
			e.currentTarget.classList.remove("over");	
		});

		dep1Li[i].idx=i;
		dep1Li[i].firstElementChild.addEventListener("focusin",function(e){
			var n=e.currentTarget.parentNode.idx;
			for(var k=0; k<dep1Li.length; k++){
			 	if(n == k){
			 		dep1Li[k].classList.add("over");
			 	}
			}
		});

		var lastChild=document.querySelectorAll("#gnb li li:last-child li:last-child a");
		var lastChild4=document.querySelector("#gnb > ul > li:nth-child(4) > a");
		var lastChild5=document.querySelector("#gnb > ul > li:last-child > a");
		
		for(var j=0; j<lastChild.length; j++){
			lastChild[j].addEventListener("focusout",function(e){
				for(var k=0; k<dep1Li.length; k++){
					dep1Li[k].classList.remove("over");
				}
			});
		}
		lastChild4.addEventListener("focusout",function(e){
			for(var k=0; k<dep1Li.length; k++){
				dep1Li[k].classList.remove("over");
			}
		});
		lastChild5.addEventListener("focusout",function(e){
			for(var k=0; k<dep1Li.length; k++){
				dep1Li[k].classList.remove("over");
			}
		});
		
	}


	

	
	
$(function(){
	// $(".covid .close").click(function(){
	// 	$(".covid").addClass("cancle");
	// 	$("#header").addClass("cancle");
	// });
	
	//  $(window).scroll(function(){
	//  if(0 < $(window).scrollTop()){
	// 		$("#gnb li").addClass("active");
	// 	}
	// 	if(45 < $(window).scrollTop()){
	// 		$(".menu_zone").addClass("on");
	// 	}
	// 	else{
	// 		$(".menu_zone").removeClass("on");
	// 	}
	
	// });

	// $("#gnb > ul > li > a").click(function(e){
	// 	e.preventDefault();
	// 	$(".search_pop").slideToggle(300);
	// });

	// $(".search_pop .close").click(function(e){
	// 	e.preventDefault();
	// 	$(".search_pop").slideUp(300);
	// });

	// $("#gnb > ul > li").hover(
	// 	function(){
	// 		$(this).addClass("over");
	
	// 	},
	// 	function(){
	// 		$(this).children().removeClass("over");
	// 		$(this).removeClass("over");
	// 	});
	// 	$("#gnb .sub a").hover(
	// 	function(){
	// 		$(this).addClass("over");
	// 	},
	// 	function(){
	// 		$(this).removeClass("over");
	// 	});
	
	// $("#gnb > ul > li > a").focusin(function(){
	// 	$(this).parent().addClass("over");
	// });
	// $("#gnb li li:last-child li:last-child a").focusout(function(){
	// 	$("#gnb li").removeClass("over");
	// });
	// $("#gnb > ul > li:nth-child(4) > a, #gnb > ul > li:last-child > a").focusout(function(){
	// 	$("#gnb li").removeClass("over");
	// });

	// var t;
	// $(window).scroll(function(){
	// 	t=$(window).scrollTop();
	// 	if(t > $("#page4").offset().top-300){
	// 		$(".banner_zone li").addClass("show")
	// 	}
	// });
	// $(window).trigger("scroll");

	// $(".play").click(function(e){
	// 	e.preventDefault();
	// 	swiper.autoplay.start();
	// });
	// $("#pause_play").click(function(e){
	// 	e.preventDefault();
	// 	if($(this).hasClass("play")){ 
	// 		$(this).removeAttr("class"); 
	// 		$(this).addClass("pause"); 
	// 		$(this).text("pause"); 
	// 		swiper.autoplay.start(); 
	// 	}
	// 	else{ 
	// 		$(this).removeAttr("class");
	// 		$(this).addClass("play");
	// 		$(this).text("play");
	// 		swiper.autoplay.stop();
	// 	}
	// });
 
	$(".apply").click(function(){
		$(".apply").addClass("active");
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
});
});
