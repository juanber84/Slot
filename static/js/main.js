$(document).ready(function() {

  	var uno1  = Math.floor((Math.random()*10)+1);
  	var uno2  = Math.floor((Math.random()*10)+1);
  	var uno3  = Math.floor((Math.random()*10)+1);

  	var dos1  = Math.floor((Math.random()*10)+1);
	var dos2  = Math.floor((Math.random()*10)+1);
	var dos3  = Math.floor((Math.random()*10)+1);

  	var tres1 = Math.floor((Math.random()*10)+1);
  	var tres2 = Math.floor((Math.random()*10)+1);
  	var tres3 = Math.floor((Math.random()*10)+1);					  						  	


  	$('.slot1').append('<img src="static/images/casino/'+uno1+'.png">')	
  	$('.slot1').append('<img src="static/images/casino/'+uno2+'.png">')
  	$('.slot1').append('<img src="static/images/casino/'+uno3+'.png">')	

  	$('.slot2').append('<img src="static/images/casino/'+dos1+'.png">')	
  	$('.slot2').append('<img src="static/images/casino/'+dos2+'.png">')	
  	$('.slot2').append('<img src="static/images/casino/'+dos3+'.png">')	

  	$('.slot3').append('<img src="static/images/casino/'+tres1+'.png">')	
  	$('.slot3').append('<img src="static/images/casino/'+tres2+'.png">')	
  	$('.slot3').append('<img src="static/images/casino/'+tres3+'.png">')											  						  	
	var cont = 0; 

	
	$("#push").click(function() {
		var varCounter = 0;
		var varName1 = function(){
		     if(varCounter <= 20) {
		        varCounter++;
		        var uno1  = Math.floor((Math.random()*10)+1);
				$('.slot1').prepend('<img src="static/images/casino/'+uno1+'.png">')
			  	$(".slot1 img:last-child").remove()
		     } else {
		         clearInterval(varName1);

		     }
		};
		var varCounter2 = 0;
		var varName2 = function(){
		     if(varCounter2 <= 25) {
		        varCounter2++;
		        var dos1  = Math.floor((Math.random()*10)+1);
				$('.slot2').prepend('<img src="static/images/casino/'+dos1+'.png">')
			  	$(".slot2 img:last-child").remove()
		     } else {

		          clearInterval(varName2);
		     }
		};
		var varCounter3 = 0;
		var varName3= function(){
		     if(varCounter3 <= 30) {
		        varCounter3++;
		        var tres1  = Math.floor((Math.random()*10)+1);
				$('.slot3').prepend('<img src="static/images/casino/'+tres1+'.png">')
			  	$(".slot3 img:last-child").remove()
		     } else {		     	
		          clearInterval(varName3);
		     }
		};					
		setInterval(varName1, 100);
		setInterval(varName2, 100);
		setInterval(varName3, 100);
	});


	$("#push1").click(function() {
	  	var uno1  = Math.floor((Math.random()*10)+1);
	  	$('.slot1').prepend('<img src="static/images/casino/'+uno1+'.png">')
	  	$(".slot1 img:last-child").remove()
	});

	$("#push2").click(function() {
	  	var uno1  = Math.floor((Math.random()*10)+1);
	  	$('.slot2').prepend('<img src="static/images/casino/'+uno1+'.png">')
	  	$(".slot2 img:last-child").remove()			  	
	});

	$("#push3").click(function() {
	  	var uno1  = Math.floor((Math.random()*10)+1);
	  	$('.slot3').prepend('<img src="static/images/casino/'+uno1+'.png">')
	  	$(".slot3 img:last-child").remove()					  	
	});

});



