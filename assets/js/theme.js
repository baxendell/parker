// // Custom js for Theme

jQuery(document).ready(function($) {
	var feed = new Instafeed({
		get: 'user',
        userId: '250223489',
        accessToken: '250223489.461915d.94d36526543044a48f15c4a4fdb3eabe',
        'limit': '4',
        'resolution': 'low_resolution',
        template: '<a href="{{link}}"><img src="{{image}}" /></a>'
	});
	feed.run();

	$('.banner-slider').owlCarousel({
	    loop:true,
	    nav:true,
	    items: 1,
	    center: true,
	    autoWidth: true,
	    dots: false,
	    navContainer: '#customNav',
	    navText: ["<img src='assets/images/icons/left-arrow-nav.png'>","<img src='assets/images/icons/right-arrow-nav.png'>"]
	    //stagePadding: 250,
	})

	//Animations
	
 	$('.wpoint').css('opacity', 0);
	  $('.wpoint').waypoint(function() {
	      $('.fil').addClass('fadeInLeft');
	      $('.fir').addClass('fadeInRight');
	      $('.sir').addClass('slideInRight');
	      $('.fip').addClass('fadeInUp');
	      $('.wpoint').css('opacity', 1);
	  }, { offset: '100%' });
});

