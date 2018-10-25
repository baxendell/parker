// // Custom js for Theme

jQuery(document).ready(function($) {
	
	$(window).on('load', function() { 
		$('body').css('opacity', 1);
		AOS.refresh();
	});
	
	//var feed = new Instafeed({
	//	get: 'user',
   //     userId: '1573873707',
   //     accessToken: '250223489.461915d.94d36526543044a48f15c4a4fdb3eabe',
   //     'limit': '4',
    //    template: '<a href="{{link}}"><img src="{{image}}" /></a>'
	//});
	//feed.run();
	

	$('.banner-slider').owlCarousel({
	    loop:true,
	    nav:true,
	    items: 1,
	    dots: false,
	    navContainer: '#customNav',
		smartSpeed:1200,
	    navText: ["<img src='assets/images/icons/left-arrow-nav.png'>","<img src='assets/images/icons/right-arrow-nav.png'>"],
		responsive : {
			992 : {
				stagePadding: 125
			}
		}
	});
	
	$('.owl-carousel').on('change.owl.carousel', function(e) {
	  if (e.namespace && e.property.name === 'position' 
		&& e.relatedTarget.relative(e.property.value) === e.relatedTarget.items().length - 1 && e.property.value > 1 ) {
		// put your stuff here ...
		$('.owl-carousel .owl-item.cloned .i3').addClass('light');
	  }
	  else if (e.namespace && e.property.name === 'position' 
		&& e.relatedTarget.relative(e.property.value) === 0) {
		// put your stuff here ...
		$('.owl-carousel .owl-item.cloned .i3').removeClass('light');
	  }
	});
});


