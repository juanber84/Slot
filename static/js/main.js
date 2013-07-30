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


  	$('.slot1').append('<img height=120 src="static/images/casino/'+uno1+'.png">')	
  	$('.slot1').append('<img height=120 src="static/images/casino/'+uno2+'.png">')
  	$('.slot1').append('<img height=120 src="static/images/casino/'+uno3+'.png">')	

  	$('.slot2').append('<img height=120 src="static/images/casino/'+dos1+'.png">')	
  	$('.slot2').append('<img height=120 src="static/images/casino/'+dos2+'.png">')	
  	$('.slot2').append('<img height=120 src="static/images/casino/'+dos3+'.png">')	

  	$('.slot3').append('<img height=120 src="static/images/casino/'+tres1+'.png">')	
  	$('.slot3').append('<img height=120 src="static/images/casino/'+tres2+'.png">')	
  	$('.slot3').append('<img height=120 src="static/images/casino/'+tres3+'.png">')											  						  	
	var cont = 0; 

	
	$("#push").click(function() {

		var varCounter = 0;
		var varName1 = function(){
		     if(varCounter <= 20) {
		        varCounter++;
		        var uno1  = Math.floor((Math.random()*10)+1);
				$('.slot1').prepend('<img height=120 src="static/images/casino/'+uno1+'.png">')
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
				$('.slot2').prepend('<img height=120 src="static/images/casino/'+dos1+'.png">')
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
				$('.slot3').prepend('<img height=120 src="static/images/casino/'+tres1+'.png">')
			  	$(".slot3 img:last-child").remove()
		     } else {		     	
		          clearInterval(varName3);
		     }
		};				

		if($("#pushblock1").is(':checked')) {  
			setInterval(varName1, 100);
        }	
		if($("#pushblock2").is(':checked')) {  
			setInterval(varName2, 100);
        }	
		if($("#pushblock3").is(':checked')) {  
			setInterval(varName3, 100);
        }	

        $('#avances').val('1')
        $('#pushblock1').prop('checked', true)
		$('#pushblock2').prop('checked', true)
		$('#pushblock3').prop('checked', true)
		$('#push1').removeClass('button-action')
		$('#push2').removeClass('button-action')
		$('#push3').removeClass('button-action')
		$('#blocked').addClass('button-highlight')
		$('#blocked').removeClass('button-caution')

	});


	$("#blocked").click(function() {
		if ($('#avances').val() == '0') {
			$('#blocked').addClass('button-highlight')
			$('#blocked').removeClass('button-caution')
			$('#avances').val('1')
			$('#push1').removeClass('button-action')
			$('#push2').removeClass('button-action')
			$('#push3').removeClass('button-action')	
	        $('#pushblock1').prop('checked', true)
			$('#pushblock2').prop('checked', true)
			$('#pushblock3').prop('checked', true)
		}else{
			$('#blocked').addClass('button-caution')
			$('#blocked').removeClass('button-highlight')
			$('#avances').val('0')					
		}
	});

	$("#push1").click(function() {
		if ($('#avances').val() == 1) {
		  	var uno1  = Math.floor((Math.random()*10)+1);
		  	$('.slot1').prepend('<img height=120 src="static/images/casino/'+uno1+'.png">')
		  	$(".slot1 img:last-child").remove()
		}else{
			if ($('#pushblock1').is(':checked')) {
				$('#pushblock1').prop('checked', false)
				$('#push1').addClass('button-action')
			}else{
				$('#pushblock1').prop('checked', true)
				$('#push1').removeClass('button-action')
			}
		}
	});

	$("#push2").click(function() {
		if ($('#avances').val() == 1) {
	  		var uno1  = Math.floor((Math.random()*10)+1);
		  	$('.slot2').prepend('<img height=120 src="static/images/casino/'+uno1+'.png">')
		  	$(".slot2 img:last-child").remove()	
		}else{
			if ($('#pushblock2').is(':checked')) {
				$('#pushblock2').prop('checked', false)
				$('#push2').addClass('button-action')		
			}else{
				$('#pushblock2').prop('checked', true)
				$('#push2').removeClass('button-action')		
			}
		}			
	});

	$("#push3").click(function() {
		if ($('#avances').val() == 1) {
		  	var uno1  = Math.floor((Math.random()*10)+1);
		  	$('.slot3').prepend('<img height=120 src="static/images/casino/'+uno1+'.png">')
		  	$(".slot3 img:last-child").remove()	
		}else{
			if ($('#pushblock3').is(':checked')) {
				$('#pushblock3').prop('checked', false)
				$('#push3').addClass('button-action')			
			}else{
				$('#pushblock3').prop('checked', true)
				$('#push3').removeClass('button-action')			
			}
		}			
			  	
	});

});



