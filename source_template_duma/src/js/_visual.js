var MOUSE_DOWN = "click";

var time = 500;

var min_window_h = 1100;
var modules = $('.module '),
    windowWidth = Math.max($(window).width(), window.innerWidth);

var visual = {
    init: function() {
        //visual.initColorNavbar(navbar);
        //visual.navbarCheck(navbar);
        //visual.navbarAnimation(navbar);
        visual.moduleInit(); //
        visual.scaleContent();
        
       // document.ontouchmove = function(event) {
            // event.preventDefault();
        //}
        if (!Modernizr.csstransitions || !Modernizr.cssanimations) {
             $.fn.transition = $.fn.animate;
             $.fn.transitionStop = $.fn.stop;
        }

        if (mobile) {
            MOUSE_DOWN = "touchstart";
        }



    },
    scrolling: function() {
 
    },
    resize: function() {
        visual.moduleResize();
        visual.scaleContent();
    },
    moduleResize: function() {
        /* ---------------------------------------------- /*
         * Resize content
        /* ---------------------------------------------- */
        visual.moduleInit(); 

    },
    scaleContent: function() {
        /* ---------------------------------------------- /*
         * Scale content
        /* ---------------------------------------------- */
    },
    moduleInit: function() {
        modules.each(function() {
        	/* ---------------------------------------------- /*
			 * Set module backgrounds
			/* ---------------------------------------------- */
            if ($(this).attr('data-background')) {
                $(this).css('background-image', 'url(' + $(this).attr('data-background') + ')');
            }
            /* ---------------------------------------------- /*
			 * Set height module
			/* ---------------------------------------------- */
            if ($(this).hasClass('module--hero')) {
                if ($(window).height() > min_window_h) {
                    $(this).height($(window).height() *0.6);
                } else {
                    $(this).height(min_window_h *0.6);
                }
            }
            /* ---------------------------------------------- /*
			 * Set full-height module
			/* ---------------------------------------------- */
            if ($(this).hasClass('module--full-height')) {
                console.log($(this).find());
                if ($(window).height() > min_window_h) {
        
                 $(this).css('height', $(window).height());  
                   
                } else {
                    $(this).height(min_window_h );
                }
            }
           
            /* ---------------------------------------------- /*
			 * Set parallax module
			/* ---------------------------------------------- */
            if (mobile === true) {
                if ($(this).hasClass('.module--parallax')) {
                    $(this).css({
                        'background-attachment': 'scroll'
                    });
                }
            } else {
                if ($(this).hasClass('.module--parallax')) {
                    $(this).css({
                        'background-attachment': 'fixed'
                    });
                }
            }
        });
    },
    preloader: function() {
        console.log('preload');
        $('.loader').fadeOut();
        $('.page-loader').delay(350).fadeOut('slow');
    }


   
};

