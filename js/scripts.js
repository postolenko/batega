var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

$(window).load(function() {

    // $("select").each(function() {

    //     var parentBlock = $(this).closest(".select-block");

    //     parentBlock.find(".select2-container").css({
    //         "width" : parentBlock.width() + "px"
    //     });

    // });

    getPromoPaddingTop();


});

$(window).resize(function() {

    getPromoPaddingTop()

});

$(document).ready(function() {

   //  var hiddenTabs;

   // $(".tab-link").click(function(e) {

   //      var parentBlock = $(this).closest(".tab-nav");

   //      var tabsName = parentBlock.attr("data-tabs-nav");

   //      var tabs = $(".tabs-content[data-tabs = '"+ tabsName +"']");

   //      e.preventDefault();

   //      var indexTab = $(this).attr("data-tab-index");

   //      var tabHeightWrapp = tabs.find(".tab-height");

   //      if( !$(this).hasClass("active") ) {

   //          $(".tab-link").removeClass("active");

   //          $(this).addClass("active");

   //          var tab = tabs.find(".tab[data-tab = '"+ indexTab +"']");

   //          tabs.find(".tab").css({
   //              "position" : "absolute"
   //          });

   //          tabs.find(".tab").fadeOut(300);

   //          setTimeout(function() {

   //              tabs.find(".tab").each(function() {

   //                  if( $(this).is(":hidden") ) {

   //                      hiddenTabs = true;

   //                  } else {

   //                      return false;

   //                  }

   //              });

   //              if( hiddenTabs == true ) {

   //                  tab.fadeIn(300);

   //                  setTimeout(function() {

   //                      if( tab.is(":visible") ) {

   //                          var tabHeight = tab.outerHeight();

   //                          tabHeightWrapp.animate({
   //                              "height" : tabHeight + "px"
   //                          },800);

   //                      }

   //                  }, 300);

   //              }

   //          }, 700);

   //          setTimeout(function() {

   //              tabs.find(".tab").css({
   //                  "position" : "relative"
   //              });

   //              tabHeightWrapp.css({
   //                  "height" : "auto"
   //              });

   //          }, 4000);

   //      } else {

   //          return false;

   //      }

   // });

});


function getTabParams() {



}


function getPromoPaddingTop() {

    $(".promo").css({
        "padding-top" : $(".header").height() + "px"
    });

}