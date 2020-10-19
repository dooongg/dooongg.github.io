(function($) { "use strict";

	function Selector_Cache() {
		var collection = {};

		function get_from_cache( selector ) {
			if ( undefined === collection[ selector ] ) {
				collection[ selector ] = $( selector );
			}

			return collection[ selector ];
		}

		return { get: get_from_cache };
	}

	var selectors = new Selector_Cache();

	
	//Preloader

	Royal_Preloader.config({
		mode           : 'progress',
		background     : '#161616',
		showProgress   : true,
		showPercentage : false
	});	

	
	/* Scroll Animation */
	
	window.scrollReveal = new scrollReveal();

	
	//Home text fade on scroll	
	
	$(window).scroll(function () { 
        var $Fade = $('.fade-elements');
        //Get scroll position of window 
        var windowScroll = $(this).scrollTop();
        //Slow scroll and fade it out 
        $Fade.css({
            'margin-top': -(windowScroll / 0) + "px",
            'opacity': 1 - (windowScroll / 400)
        });
    });	
	
	
	$(document).ready(function() {
	
		
		//Scroll back to top
	
		var offset = 450;
		var duration = 500;
		jQuery(window).scroll(function() {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.scroll-to-top').fadeIn(duration);
			} else {
				jQuery('.scroll-to-top').fadeOut(duration);
			}
		});
				
		jQuery('.scroll-to-top').on('click', function(event) {
			event.preventDefault();
			jQuery('html, body').animate({scrollTop: 0}, duration);
			return false;
		})
		
		
		//Parallax
		
		$('.parallax').parallax("50%", 0.3);
		
				
		//Tooltip

		$(".tipped").tipper();

	
		//Navigation	

		//open navigation clicking the menu icon
		$('.cd-nav-trigger').on('click', function(event){
			event.preventDefault();
			toggleNav(true);
		});
		//close the navigation
		$('.cd-close-nav, .cd-overlay').on('click', function(event){
			event.preventDefault();
			toggleNav(false);
		});

		function toggleNav(bool) {
			$('.cd-nav-container, .cd-overlay').toggleClass('is-visible', bool);
			$('main').toggleClass('scale-down', bool);
		}
		$('.cd-nav li').on('click', function(event){
			//close navigation
			toggleNav(false);
		});
		
		
		/* Video */
		
		$(".container").fitVids();
						
		$('.vimeo a,.youtube a').on('click', function (e) {
			e.preventDefault();
			var videoLink = $(this).attr('href');
			var classeV = $(this).parent();
			var PlaceV = $(this).parent();
			if ($(this).parent().hasClass('youtube')) {
				$(this).parent().wrapAll('<div class="video-wrapper">');
				$(PlaceV).html('<iframe frameborder="0" height="333" src="' + videoLink + '?autoplay=1&showinfo=0" title="YouTube video player" width="547"></iframe>');
			} else {
				$(this).parent().wrapAll('<div class="video-wrapper">');
				$(PlaceV).html('<iframe src="' + videoLink + '?title=0&amp;byline=0&amp;portrait=0&amp;autoplay=1&amp;color=21d365" width="500" height="281" frameborder="0"></iframe>');
			}
		});	
	
		
	});
	
 
  })(jQuery); 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 





	