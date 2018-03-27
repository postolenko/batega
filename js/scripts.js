var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

var popupName;
var popupBlock;
var hide_element;

var fileValArr;
var fileName;
var parentBlock;
var fileNameWrapp;

$(window).load(function() {

    getPromoPaddingTop();

});

$(window).resize(function() {

    getPromoPaddingTop()

});

$(document).scroll(function() {

  getAnimation();

});


$(document).ready(function() {

    getAnimation();

    $(function() {

        $(".show_popup").click(function(e) {

            e.preventDefault();

            popupName = $(this).attr("data-popup-name");
            popupBlock = $("[data-popup = '"+ popupName +"']");

            popupBlock.fadeIn(400);

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

    $(function() {

        $(".respmenubtn").click(function() {

            if( $(".main-nav_wrapp").is(":hidden") ) {

                $(".main-nav_wrapp").fadeIn(300);

                $(this).addClass("active");

            } else {

                $(".main-nav_wrapp").fadeOut(300);

                $(this).removeClass("active");

            }

        });

        $(this).keydown(function(eventObject){

            if (eventObject.which == 27 &&
                $(".main-nav_wrapp").is(":visible") ) {

                    $(".main-nav_wrapp").fadeOut(300);

                    $(".respmenubtn").removeClass("active");

            }

        });

    });

    $( "input[type='file']" ).change(function() {

      fileValArr = $(this).val().split("\\");

      fileName = fileValArr[fileValArr.length - 1];

      parentBlock = $(this).closest(".file-upload");

      fileNameWrapp = parentBlock.find(".file_name");

      fileNameWrapp.text(fileName);

    });

});

function getPromoPaddingTop() {

    $(".promo_box").css({
        "padding-top" : $(".header").height() + "px"
    });

}

function getAnimation() {

  $("section").each(function() {

    if( $(this).offset().top <= $(document).scrollTop() + $(window).height() ) {

      $(this).addClass("active");

    }

  });  

}