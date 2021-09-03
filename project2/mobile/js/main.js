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
	$(window).scroll(function(){
		var t=$(window).scrollTop();
		if(t > 40){
			$("#header").addClass("cancle");
		}
		else if($(".covid").hasClass("cancle") == false){
			$("#header").removeClass("cancle");
		}
	});
	$(window).trigger("scroll");

	$(".covid .close").click(function(){
		$(".covid").addClass("cancle");
		$("#header").addClass("cancle");
		$("#header .top").css({transition:"top "+0.3+"s"})
	});

	$(".tab").click(function(e){
		e.preventDefault();
		$(".menu_zone").addClass("active");
		$("body").addClass("fixed");
	});
	$(".menu_zone .close").click(function(e){
		e.preventDefault();
		$(".menu_zone").removeClass("active");
		$("body").removeClass("fixed");
	});
});