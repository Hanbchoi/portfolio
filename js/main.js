$(function(){
	var videoUrl=["video0","video1"];
	var videoN=0;
	var videoPath="";
	var video=document.getElementById("my_video");

	var n=0;
	var t;
	var pos=0;
	var scrollTimer;

	AOS.init({
		easing:"ease-in-out-sine",
		duration:1000,
		once:true
	});

	video.muted=true;
	video.play();

	function init(){
		$("#gnb li").eq(n).addClass("on");
		var current=(videoN)+1+"/"+videoUrl.length;
		$(".header_inner .slide_count").text(current);
		$(".project").eq(0).addClass("active");
		$(".project").eq(0).addClass("on");
	}
	init();

	function videoRolling(){
		if(videoN < (videoUrl.length)-1){
			videoN=videoN+1;
		}
		else{
			videoN=0;
		}

		videoPath="video/"+videoUrl[videoN]+".mp4";
		$("#my_video").attr({src:videoPath});
		video.currentTime=0;
		video.play();
		var current=(videoN)+1+"/"+videoUrl.length;
		$(".header_inner .slide_count").text(current);
	}

	video.addEventListener("ended", videoRolling);
	$("#header .prev, #header .next").click(videoRolling);

	// $(".content p").textillate();

	$("#header .prev, #header .next").hover(
		function(){
			$(this).addClass("active");
		},
		function(){
			$(this).removeClass("active");
		}
	);

	$(window).scroll(function(){
		clearTimeout(scrollTimer);

		scrollTimer=setTimeout(function(){
			t=$(window).scrollTop();
			//console.log("t:", t);
			if(t < $("#page1").offset().top){
				n=0;
			}
			else if(t < $("#page2").offset().top){
				n=1;
			}
			else if(t < $("#page3").offset().top){
				n=2;
			}
			else if(t < $("#page4").offset().top){
				n=3;
			}
			else if(t < $("#page5").offset().top){
				n=4;

				if(t == $(document).height()-$(window).height()){
					n=5;
				}
			}
			else{
				n=5;
			}

			if(n == 0 || n == 2 || n == 4 || n == 5){
				$("#gnb li").removeClass("active");
				$("#header .logo").removeClass("active");
			}
			else{
				$("#gnb li").addClass("active");
				$("#header .logo").addClass("active");
			}

			$("#gnb li").removeClass("on");
			$("#gnb li").eq(n).addClass("on");
		}, 100);
	});

	$(".index dl").click(function(e){
		e.preventDefault();
		n=$(this).index();
		$(".project").removeClass("active");
		$(".project").eq(n).addClass("active"); 

		var posy=$(".project").eq(n).offset().top;

		$("html").animate({scrollTop:posy}, 400);
	});
	$(".project_title").click(function(e){
		e.preventDefault();
		n=$(this).index();
		
		if($(this).parent().hasClass("active") == false){
			$(".project").removeClass("active");
			$(this).parent().addClass("active");
		}
        else{										
          	$(this).parent().removeClass("active"); 
        }

		t=$(this).parent().offset().top;  
        $("html").animate({scrollTop:t},400);
    });
	$(window).trigger("scroll");

	$("#gnb li").click(function(e){
		e.preventDefault();
		n=$(this).index();

		if(n == 0){
			pos=0;
		}
		else{
			pos=Math.ceil($("#page"+n).offset().top);
		}

		$("html").animate({scrollTop:pos}, 800);
	});
});