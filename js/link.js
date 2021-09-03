$(function(){
	$(".project").eq(0).find(".visit").click(function(e){
		e.preventDefault();

		if(isMobile){
			location.href="project1/mobile/index.html";
		}
		else{
			location.href="project1/pc/index.html";
		}
	});
	$(".project").eq(1).find(".visit").click(function(e){
		e.preventDefault();

		if(isMobile){
			location.href="project2/mobile/index.html";
		}
		else{
			location.href="project2/pc/index.html";
		}
	});
	$(".project").eq(2).find(".visit").click(function(e){
		e.preventDefault();
		location.href="project3/index.html";
	});
});