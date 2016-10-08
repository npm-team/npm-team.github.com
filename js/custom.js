
/*						Document Ready Functions			*/
jQuery(document).ready(function() {
	if ( !Modernizr.csstransitions ) {
		var stopped = 0;
		jQuery("#social").delay(500).animate({left:"-10px", opacity: "0.8"},3000,"easeInOutQuad");
		jQuery("#content, #counter").delay(500).animate({right:"-10px", opacity: "0.8"},3000,"easeInOutQuad");
		}
	jQuery( ".animation_selector" ).click(function() {
	jQuery('.fsb-slider').fsbslider('destroy');
	jQuery('.fsb-slider').fsbslider({"animation_time":50,"animation_type":jQuery(this).attr("data-value"),"pattern":false});
	});
	jQuery( ".pattern_selector" ).click(function() {
	jQuery('.fsb-slider').fsbslider('updatepattern',{pattern:jQuery(this).attr("data-value")});
});
	jQuery( ".destroyer" ).click(function() {
	jQuery('.fsb-slider').fsbslider('destroy');
});
	jQuery( ".initer" ).click(function() {
	jQuery('.fsb-slider').fsbslider({"animation_time":15,"animation_type":"crossfade","pattern":false});	
});

});