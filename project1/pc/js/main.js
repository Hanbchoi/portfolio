window.addEventListener("load", function(){

//GNB
var header=document.getElementById("header");
var menu=document.getElementsByClassName("menu")[0];
var gnb=document.getElementById("gnb");
var dep1Ul=gnb.children[0];
var dep1Li=dep1Ul.children;


for(var i=0; i<dep1Li.length; i++){
	dep1Li[i].idx=i;
	
	dep1Li[i].addEventListener("mouseenter",function(e){
		n=e.currentTarget.idx;
		menu.classList.add("over");
		header.classList.add("over");
		for(var j=0; j<dep1Li.length; j++){
			if(j == n){
				dep1Li[j].classList.add("over");
			}
			else{
				dep1Li[j].classList.remove("over");
			}
		}
	});
	dep1Li[i].addEventListener("mouseleave",function(){
		menu.classList.remove("over");
		header.classList.remove("over");
		for(var j=0; j<dep1Li.length; j++){
			dep1Li[j].classList.remove("over");
		}
	});

	var dep1A=dep1Li[i].children[0];
	var dep2Ul=dep1Li[i].children[1];
	var dep2Li=dep2Ul.children;

	dep1A.addEventListener("focusin",function(e){
		e.target.parentElement.classList.add("over");
		if(e.target.parentElement.idx == 0){
			menu.classList.add("over");
			header.classList.add("over");
		}
	});

	for(var k=0; k<dep2Li.length; k++){
		if(k == dep2Li.length - 1){
			dep2Li[k].children[0].addEventListener("focusout",function(e){
				var Link=e.target.parentElement.parentElement.parentElement;
				Link.classList.remove("over");

				var idx=Link.idx;
				if(idx == (dep1Li.length-1)){
					menu.classList.remove("over");
					header.classList.remove("over");
				}
			});
		}
	}
}

// utils .lang 
var lang=document.getElementsByClassName("lang")[0];//$(".lang")
var langUl=lang.children[0];
var langLi=langUl.children[0];
var LiA=langLi.children[0];
var LiUl=langLi.children[1];
var lastChild=LiUl.children[1];

lang.addEventListener("click",function(e){
	e.preventDefault();
	if(lang.classList.contains("active") == false){
		lang.classList.add("active");
	}
	else{
		lang.classList.remove("active");
	}
});	
lang.addEventListener("focusin",function(){
	lang.classList.add("active");
});
lastChild.addEventListener("focusout",function(){
	lang.classList.remove("active");
});

// main_slider
var swiper1 = new Swiper(".mainSwiper", {
	speed: 1200,
	effect: "fade",
	fadeEffect: {
		crossFade: true,
	},
	autoplay: {
		delay: 5000,
	},
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
	pagination: {
	  el: ".swiper-pagination",
	  type: "fraction",
	},
	keyboard: true,
  });

var catergory2=document.getElementsByClassName("category")[0];
var title=document.querySelectorAll(".category2 .title a");

	for(var i=0; i<title.length; i++){

		title[i].addEventListener("mouseenter",function(e){
			e.target.classList.add("active");
		});
		title[i].addEventListener("mouseleave",function(e){
			e.target.classList.remove("active");
		});
		title[i].addEventListener("focusin",function(e){
			e.target.classList.add("active");
		});
	}
//banner
	var subSwiper=new Swiper(".subSwiper", {
		slidesPerView: 4,
		spaceBetween: 65,
		autoplay: {
			delay: 5000, 
		},
	});

	$(".prev").click(function(e){
		e.preventDefault();
		subSwiper.slidePrev();
	});
	$(".next").click(function(e){
		e.preventDefault();
		subSwiper.slideNext();
	});
	$(".pause").click(function(e){
		e.preventDefault();
		subSwiper.autoplay.stop();
	});
	$(".play").click(function(e){
		e.preventDefault();
		subSwiper.autoplay.start();
	});
});