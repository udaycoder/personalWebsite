jQuery(document).ready(function($){

		$(window).on('scroll', function() {

				var y_scroll_pos = window.pageYOffset;
				var scroll_beg = 560;
        var scroll_end=900;
				var window_width=$(window).width();
        if(y_scroll_pos < scroll_beg && window_width>=1186){
           $("#daily-quotes").fadeOut("slow");
        }
				if(y_scroll_pos > scroll_beg && y_scroll_pos < scroll_end && window_width>=1186) {
               $("#daily-quotes").fadeIn("slow");
				}
        if(y_scroll_pos > scroll_end && window_width>=1186) {
               $("#daily-quotes").fadeOut();
        }
				if(window_width < 1186){
					 $("#daily-quotes").hide();
				}

		});

	})
