$(document).ready(function() 
{	 
	var index = 0;
	var images = $("#gallery img");
	var imgHeight = $(images).attr("height");
	for (i=0; i<images.length; i++)
	{
		$(images[i]).addClass("image-"+i);
	}
	
	$("#next").click(sift);
	show(index);
	setInterval(sift, 8000);
	
	function sift()
	{
		if (index<(images.length-1)){index+=1 ; }
		else {index=0}
		show (index);
	}
	
	function show(num)
	{
		$(images).fadeOut(400);
		$(".image-"+num).stop().fadeIn(400);
	}
});