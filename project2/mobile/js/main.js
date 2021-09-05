window.addEventListener("load", function(){
	var swiper = new Swiper(".mySwiper", {
        pagination: {
          el: ".swiper-pagination",
        },
		autoplay: {
			delay: 5000,
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true
		},
	});
	var swiper = new Swiper(".gallerySwiper", {
		pagination: {
			el: ".swiper-pagination",
			clickable: true
		},
		autoplay: {
			delay: 5000,
		},
		navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
	});
	var swiper = new Swiper(".subSwiper", {
        slidesPerView: 1.5,
        spaceBetween: 30,
		centeredSlides: true,
		loop:true,
        pagination: {
			el: ".swiper-pagination",
			clickable: true
        },
    });

	var header=document.getElementById("header");
	var [top, menu_zone]=header.children;
	var tab=top.lastElementChild;
	var menu_close=menu_zone.firstElementChild;
	var covid=document.getElementsByClassName("covid")[0];
    var covid_close=covid.lastElementChild;
	var body=document.body;

	window.addEventListener("scroll",function(){
		var t=window.pageYOffset;
		if(40 < t){
			header.classList.add("cancle");
		}
		else if(covid.classList.contains("cancle") == false){
			header.classList.remove("cancle");
		}
	});
	var scrollTrigger=document.createEvent("UiEvent");
	scrollTrigger.initEvent("scroll");			 	
	window.dispatchEvent(scrollTrigger);

	covid_close.addEventListener("click",function(){
		covid.classList.add("cancle");
		header.classList.add("cancle");
		top.style.transition="top "+0.3+"s"
	});

	tab.addEventListener("click",function(e){
		e.preventDefault();
		menu_zone.classList.add("active");
		body.classList.add("fixed");
	});
	menu_close.addEventListener("click",function(e){
		e.preventDefault();
		menu_zone.classList.remove("active");
		body.classList.remove("fixed");
	});
});