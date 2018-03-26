$(window).on("load",function(){

	$(".scroll").mCustomScrollbar();

});

$(document).ready(function() {		

	// $("select").each(function() {

	// 	$(this).select2({
	// 		minimumResultsForSearch: Infinity
	// 	});

	// });

	var gallery = new Swiper('.gallery-slider', {
	    loop: true,
	    speed: 1400,
	    effect: 'coverflow',
	    grabCursor: true,
	    centeredSlides: true,
	    slidesPerView: 'auto',
	    coverflowEffect: {
	        rotate: 0,
	        stretch: 0,
	        depth: 145,
	        modifier: 1,
	        slideShadows : true
	    },
	    pagination: {
			el: '.gallery_pagination',
			type: 'bullets',
			clickable: true
		},
	    navigation: {
			nextEl: '.gallery-next',
			prevEl: '.gallery-prev',
			clickable: true
		},
	  });

	$('.tabs-content').on('init', function(slick){
		
    	var slideDesc = $(this).find(".slick-slide.slick-active .slide-desc").html();

    	var tabsName = $(this).attr("data-tabs");

    	$("[data-tabs-desc = '"+ tabsName +"']").html(slideDesc);

	});

	$('.tabs-content').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		
    	var slideDesc = $(this).find(".slick-slide:eq("+nextSlide+") .slide-desc").html();

    	var tabsName = $(this).attr("data-tabs");

    	$("[data-tabs-desc = '"+ tabsName +"']").html(slideDesc);

	});

	$(".testimonial-slider").not(".slick-initialized").slick({
        dots: true,
        arrows: true,
        // autoplay: true,
        autoplaySpeed: 10000,
        speed: 800,
        fade: true,
        draggable: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        appendArrows: $(".testimonials-arrows"),
        draggable : true
    });


	$(".tabs-content").not(".slick-initialized").slick({
        dots: true,
        arrows: false,
        // autoplay: true,
        autoplaySpeed: 10000,
        speed: 800,
        fade: true,
        draggable: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
    });



    $(".tab-link").click(function(e) {

        var parentBlock = $(this).closest(".tab-nav");
        var tabsName = parentBlock.attr("data-tabs-nav");

        parentBlock.find(".tab-link").removeClass("active");
        $(this).addClass("active");

        var tabIndex = $(this).index();

        var slickDotsNav =  $("[data-tabs = '" + tabsName + "']").find(".slick-dots");

        slickDotsNav.find("li:eq("+ tabIndex +") button").click();

    });

   	$('audio').mediaelementplayer();

});

