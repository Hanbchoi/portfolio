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

	var subSwiper=new Swiper(".subSwiper", {
		slidesPerView: 4,
		spaceBetween: 65,
		autoplay: {
			delay: 5000, 
		},
	});

	var swiper = new Swiper(".photoSwiper", {
        slidesPerView: "auto",
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      });

	  var swiper = new Swiper(".ticketSwiper", {
        slidesPerView: "auto",
        spaceBetween: 20,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
    });

	var header=document.getElementById("header");
	var top=header.firstElementChild;
	var [logo, tab]=top.children;

	var gnb=document.getElementById("gnb");
	var dim=document.getElementsByClassName("dim")[0];

	var body=document.body;
	var wrapper=body.firstElementChild;

	var depth1Ul=gnb.firstElementChild;
	var depth1Li=depth1Ul.children;
	
	var page=[];
	for(var i=0; i<wrapper.children.length; i++){
		if(wrapper.children[i].id.indexOf("page") !==-1){
			page.push(wrapper.children[i]);
		}
	}
	

	var mainN;
	var t=0;


	tab.addEventListener("click", function(e){
		e.preventDefault();
		gnb.classList.add("active");
		dim.classList.add("active");
		body.classList.add("fixed");
	});
	dim.addEventListener("click", function(e){
		e.preventDefault();
		gnb.classList.remove("active");
		dim.classList.remove("active");
		body.classList.remove("fixed");	

		setTimeout(() => {
			for(var i=0; i<depth1Li.length; i++){
				if(depth1Li[i].classList.contains("active")){
					depth1Li[i].classList.remove("active");
					depth1Li[i].lastElementChild.style.height="0px";
				}
			}
		}, 300);
	});

	var depth2Height=[];

	for(var i=0; i<depth1Li.length; i++){
		depth1Li[i].idx=i;
		depth2Height.push(depth1Li[i].lastElementChild.offsetHeight);
		depth1Li[i].lastElementChild.style.height="0px";

		depth1Li[i].addEventListener("click",function(e){
			e.preventDefault();
			var n=e.currentTarget.idx;	
			for(var j=0; j<depth1Li.length; j++){
				if(n == j){
					if(e.currentTarget.classList.contains("active") == false){
						depth1Li[j].classList.add("active");
						depth1Li[j].lastElementChild.style.height=depth2Height[j]+"px";
					}
					else{
						depth1Li[j].classList.remove("active");
						depth1Li[j].lastElementChild.style.height="0px";
					}
				}
				else{
					depth1Li[j].classList.remove("active");
					depth1Li[j].lastElementChild.style.height="0px";
				}
			}
		});
	}

	window.addEventListener("scroll",function(){
		t=window.pageYOffset;

		if(t < page[0].offsetTop){
			mainN=0;
		}
		else if(t < page[1].offsetTop){
			mainN=1;
		}
		else if(t < page[2].offsetTop){
			mainN=2;
		}
		else if(t < page[3].offsetTop){
			mainN=3;
		}
		else{
			mainN=4;
		}
		if( mainN == 1 || mainN == 2 || mainN == 3 ){
			top.classList.add("on");
		}
		else{
			top.classList.remove("on");
		}
	});

	var scrollTrigger=document.createEvent("UiEvent");
	scrollTrigger.initEvent("scroll");			 	
	window.dispatchEvent(scrollTrigger);
});