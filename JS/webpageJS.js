jQuery(document).ready(function($){

		$(window).on('scroll', function() {
				var y_scroll_pos = window.pageYOffset;
				var scroll_beg = 650;
        var scroll_end=900;
        if(y_scroll_pos < scroll_beg){
           $("#daily-quotes").fadeOut("slow");
        }
				if(y_scroll_pos > scroll_beg && y_scroll_pos < scroll_end) {
               $("#daily-quotes").fadeIn("slow");
				}
        if(y_scroll_pos > scroll_end) {
               $("#daily-quotes").fadeOut();
        }
		});

	})
