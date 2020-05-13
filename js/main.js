jQuery(function($) {'use strict',
	
	//Countdown js
	 $("#countdown").countdown({
			date: "17 september 2018 12:00:00",
			format: "on"
		},
		
		function() {
			// callback function
		});
	

	
	//Scroll Menu

	function menuToggle()
	{
		var windowWidth = $(window).width();

		if(windowWidth > 767 ){
			$(window).on('scroll', function(){
				if( $(window).scrollTop()>405 ){
					$('.main-nav').addClass('fixed-menu animated slideInDown');
				} else {
					$('.main-nav').removeClass('fixed-menu animated slideInDown');
				}
			});
		}else{
			
			$('.main-nav').addClass('fixed-menu animated slideInDown');
				
		}
	}

	menuToggle();
	

	// Carousel Auto Slide Off
	$('#event-carousel, #twitter-feed, #sponsor-carousel ').carousel({
		interval: false
	});

	$( window ).resize(function() {
		menuToggle();
	});

	$('.main-nav ul').onePageNav({
		currentClass: 'active',
	    changeHash: false,
	    scrollSpeed: 900,
	    scrollOffset: 0,
	    scrollThreshold: 0.3,
	    filter: ':not(.no-scroll)'
	});  


	// sending wishes to email
	var myform = $("form#myform");
	myform.submit(function(event){
		event.preventDefault();

	  // Change to your service ID, or keep using the default service
		var service_id = "default_service";
	  	var template_id = "wish";

	  	myform.find("button").text("Sending...");
	  	emailjs.sendForm(service_id,template_id,"myform").then(function(){ 
	    	alert("Sent!");
	       	myform.find("button").text("Send");
	    }, function(err) {
	       alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
	       myform.find("button").text("Send");
	    });
	  return false;
	});

});

