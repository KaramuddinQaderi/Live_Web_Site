jQuery(document).ready(function() {

	// when a nav parent is clicked
	jQuery(".alt-nav > ul > li > a").click(function() {

		// if section is already active and clicked again
		if ( jQuery(this).parent("li").hasClass("active-parent") ) {
			jQuery(".alt-nav li").removeClass("active-parent");
			jQuery(".alt-nav ul ul").slideUp();
		} else {
		// if section is made active
			jQuery(".alt-nav ul ul").slideUp();
			jQuery(".alt-nav li").removeClass("active-parent");
			jQuery(this).parent("li").addClass("active-parent");
			jQuery(this).parent("li").find("ul").slideDown();
			return false;
		}
	}); // end click event handler

});