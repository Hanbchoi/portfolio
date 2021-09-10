window.addEventListener("load",function(){
	var header=document.getElementById("header");
	var top=header.firstElementChild;

	
	var dim=document.getElementsByClassName("dim")[0];
	var tab=document.getElementsByClassName("tab")[0];

	var body=document.body;
	var wrapper=body.firstElementChild;
	var section=document.getElementById("section");

	var gnb=document.getElementById("gnb");
	var depth1Ul=gnb.firstElementChild;
	var depth1Li=depth1Ul.children;
	var mobile=document.getElementById("mobile");
	var mobileUl=mobile.firstElementChild;
	var mobileLi=mobileUl.children;
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
	
	var winHalf;
	var w;
	var n=0;
	var t=0; 
	var pos=0;

	setTimeout(function(){
		header.classList.add("active");
		controllerLi[n].classList.add("on");
	}, 700);
	
	window.addEventListener("scroll",function(){
		t=window.pageYOffset;
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

	tab.addEventListener("click",function(e){
		e.preventDefault();
		body.classList.add("fixed");
		mobile.classList.add("active");
		dim.classList.add("active");
		close.classList.add("active");
	});
	dim.addEventListener("click",function(e){
		e.preventDefault();
		closeMenu();
	});
	close.addEventListener("click",function(e){
		e.preventDefault();
		closeMenu();
	});
	
	window.addEventListener("resize",function(){
		winHalf=window.innerHeight/2;
		w=window.innerWidth;
		
		if(w > 720){
			if(mobile.classList.contains("active")){
				closeMenu();
			}
		}
		var scrollTrigger=document.createEvent("UiEvent");
		scrollTrigger.initEvent("scroll");			 	
		window.dispatchEvent(scrollTrigger);
	});
	var resizeTrigger=document.createEvent("UiEvent");
	resizeTrigger.initEvent("resize");
	window.dispatchEvent(resizeTrigger);

	function closeMenu(){
		body.classList.remove("fixed");
		mobile.classList.remove("active");
		dim.classList.remove("active");
		close.classList.remove("active");
	}

	for(var i=0; i<controllerLi.length; i++){
		controllerLi[i].idx=i;
		controllerLi[i].addEventListener("click",function(e){
			e.preventDefault();
			n=e.currentTarget.idx;
			if(n == 0){
				pos=header.offsetTop;
			}
			else{
				pos=page[n-1].offsetTop;
			}
			window.scrollTo({top: pos, behavior:'smooth'});
		});
		mobileLi[i].idx=i;
		mobileLi[i].addEventListener("click",function(e){
			e.preventDefault();
			n=e.currentTarget.idx;
			if(n == 0){
				pos=header.offsetTop;
			}
			else{
				pos=page[n-1].offsetTop;
			}
			closeMenu();
			window.scrollTo({top: pos, behavior:'smooth'});
		});
		depth1Li[i].idx=i;
		depth1Li[i].addEventListener("click",function(e){
			e.preventDefault();
			n=e.currentTarget.idx;
			if(n == 0){
				pos=header.offsetTop;
			}
			else{
				pos=page[n-1].offsetTop;
			}
			closeMenu();
			window.scrollTo({top: pos, behavior:'smooth'});
		});
	}
	

	btn_top.addEventListener("click",function(e){
		e.preventDefault();
		pos=0;
		window.scrollTo({top: pos, behavior:'smooth'});
	});
});
