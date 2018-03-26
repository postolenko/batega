var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

$(window).load(function() {

    getPromoPaddingTop();

});

$(window).resize(function() {

    getPromoPaddingTop()

});

$(document).ready(function() {

    $(function() {

        $(".show_popup").click(function(e) {

            e.preventDefault();

            popupName = $(this).attr("data-popup-name");
            popupBlock = $("[data-popup = '"+ popupName +"']");

            popupBlock.fadeIn(400);

            // popupBox = popupBlock.find(".popup");

            // popupBox.css({
            //     "top" : ( $(window).height() - popupBox.outerHeight() ) / 2 + "px"
            // });

        });

         $(this).keydown(function(eventObject){

            if (eventObject.which == 27) {

                if ( popupBlock.is(":visible") ) {

                    popupBlock.fadeOut(300);

                }

            }

        });

        $(".close-popup").click(function() {

            popupBlock = $(this).closest(".popup_wrapp");

            popupBlock.fadeOut(300);

        });


        $(document).mouseup(function (e){

            hide_element = $('.popup');

            if (!hide_element.is(e.target)

                && hide_element.has(e.target).length === 0) {

                hide_element.closest(".popup_wrapp").fadeOut(300);
            }

        });

    });

    $(function() {

      $("input[type='tel']").mask("+7 (999) 999-99-99");

    });

});


function getTabParams() {



}


function getPromoPaddingTop() {

    $(".promo").css({
        "padding-top" : $(".header").height() + "px"
    });

}