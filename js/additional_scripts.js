$(window).on("load",function(){

	$(".scroll").mCustomScrollbar();

});

$(document).ready(function() {

    var gallery = $(".gallery-slider").not(".slick-initialized").slick({
        dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 10000,
        speed: 800,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        draggable : true
    });

	$('.tabs-content').on('init', function(slick){
		
    	var slideDesc = $(this).find(".slick-slide.slick-active .slide-desc").html();

    	var tabsName = $(this).attr("data-tabs");

        var indexSlide = $(this).find(".slick-slide.slick-active").index();

    	$("[data-tabs-desc = '"+ tabsName +"']").html(slideDesc);

        $("[data-tabs-nav = '" + tabsName + "'] .tab-link").removeClass("active");

        $("[data-tabs-nav = '" + tabsName + "'] .tab-link:eq("+ indexSlide +")").addClass("active");

	});

	$('.tabs-content').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		
    	var slideDesc = $(this).find(".slick-slide:eq("+nextSlide+") .slide-desc").html();

    	var tabsName = $(this).attr("data-tabs");

    	$("[data-tabs-desc = '"+ tabsName +"']").html(slideDesc);

	});

    $('.tabs-content').on('afterChange', function(event, slick, currentSlide, nextSlide){

        var tabsName = $(this).attr("data-tabs");

        $("[data-tabs-nav = '" + tabsName + "'] .tab-link").removeClass("active");

        $("[data-tabs-nav = '" + tabsName + "'] .tab-link:eq("+ currentSlide +")").addClass("active");

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

        var tabIndex = $(this).index();

        var slickDotsNav =  $("[data-tabs = '" + tabsName + "']").find(".slick-dots");

        slickDotsNav.find("li:eq("+ tabIndex +") button").click();

    });

    $(".testimonial-slider").not(".slick-initialized").slick({
        dots: true,
        arrows: true,
        autoplay: true,
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

   	$('audio').mediaelementplayer();

});

