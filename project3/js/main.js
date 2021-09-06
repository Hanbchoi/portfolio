window.addEventListener("load",function(){
	var header=document.getElementById("header");
	var top=header.firstElementChild;

	var gnb=document.getElementById("gnb");
	var dim=document.getElementsByClassName("dim")[0];

	var body=document.body;
	var wrapper=body.firstElementChild;
	var section=document.getElementById("section");


	var depth1Ul=gnb.firstElementChild;
	var depth1Li=depth1Ul.children;
	var mobile=document.getElementById("mobile");
	var close=mobile.lastElementChild;

	var controller=document.getElementsByClassName("controller")[0];
	var controllerUl=controller.firstElementChild;
	var	controllerLi=controllerUl.children;

	var btn_top=document.getElementsByClassName("btn_top")[0];
	var dim=document.getElementsByClassName("dim")[0];

	var page=[]; 
	for(var i=0; i<section.children.length; i++){
		if(section.children[i].id.indexOf("page") !==-1){
			page.push(section.children[i]);
		}
	}
	
	var t=0;
	var n;
	
	
	window.addEventListener("scroll",function(){
		t=window.pageYOffset;
		console.log(t);
		if(t < page[0].offsetTop-winHalf){
			n=0;
		}
		else if(t < page[1].offsetTop-winHalf){
			n=1;
		}
		else if(t < page[2].offsetTop-winHalf){
			n=2;
		}
		else if(t < page[3].offsetTop-winHalf){
			n=3;
		}
		else if(t < page[4].offsetTop-winHalf){
			n=4;
		}
		else{
			n=5;
		}
		
		categoryControl();

		for(var i=0; i<controllerLi.length; i++){
			if(n == i){
				controllerLi[i].classList.add("on");
			}
			else{
				controllerLi[i].classList.remove("on");
			}
		}

		if(t > 80){
			header.classList.add("fixed");
			btn_top.classList.add("active");
		}
		else{
			header.classList.remove("fixed");
			btn_top.classList.remove("active");
		}
	});
	// var scrollTrigger=document.createEvent("UiEvent");
	// scrollTrigger.initEvent("scroll");			 	
	// window.dispatchEvent(scrollTrigger);

	function categoryControl(){
		if(page[4].classList.contains("active") == true){
			return;
		}
		if(n == 0){
			header.classList.add("active");
		}
		else{
			page[n-1].classList.add("active");
		}
	}

	var winHalf;
	var w;
	
	window.addEventListener("resize",function(){
		winHalf=window.innerHeight/2;
		w=window.innerWidth;
		
		if(w > 720){
			if(mobile.classList.contains("active")){
				body.classList.remove("fixed");
				mobile.classList.remove("active");
				dim.classList.remove("active");
				close.classList.remove("active");
			}
		}
	});
	var resizeTrigger=document.createEvent("UiEvent");
	resizeTrigger.initEvent("resize");
	window.dispatchEvent(resizeTrigger);


//-------------------------------------------------
// $(function(){
	var n=0;
	var t=0; 
	var pos=0;
	// var w;
	
	setTimeout(function(){
		$("#header").addClass("active");
		$(".controller li").eq(n).addClass("on");
	}, 700);

// 	$(window).scroll(function(){
// 		t=$(window).scrollTop();
// 		console.log(winHalf);
// 		if(t < $("#page1").offset().top-winHalf){
// 			n=0;
// 		}
// 		else if(t < $("#page2").offset().top-winHalf){
// 			n=1;
// 		}
// 		else if(t < $("#page3").offset().top-winHalf){
// 			n=2;
// 		}
// 		else if(t < $("#page4").offset().top-winHalf){
// 			n=3;
// 		}
// 		else if(t < $("#page5").offset().top-winHalf){
// 			n=4;
// 		}
// 		else{
// 			n=5;
// 		}

// 		categoryControl();

// 		$(".controller li").removeClass("on");
// 		$(".controller li").eq(n).addClass("on");

// 		if(t > 80){
// 			$("#header").addClass("fixed"); 
// 			$(".btn_top").fadeIn(300); 
// 		}
// 		else{
// 			$("#header").removeClass("fixed");
// 			$(".btn_top").fadeOut(300);
// 		}
// 	});
// 	$(window).trigger("resize");
// 	$(window).trigger("scroll");

// 	function categoryControl(){
// 		if($("#page5").hasClass("active") == true){
// 			return;
// 		}

// 		if(n == 0){
// 			$("#header").addClass("active");
// 		}
// 		else{
// 			$("#page"+n).addClass("active");
// 		}
// 	}
	
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
	
// 	var winHalf;

// 	$(window).resize(function(){
// 		winHalf=$(window).height()/2;
// 		w=$(window).width();

// 		if(w > 720){
// 			if($("#mobile").hasClass("active")){
// 				$(".close").trigger("click");
// 			}
// 		}
// 	});
// 	$(window).trigger("resize");

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