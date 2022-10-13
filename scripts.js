jQuery(document).ready(function() {

	/*	1. Adding active class current menu items. */
	jQuery('nav li a').filter(function(){

        return this.href === location.href;

        jQuery('nav li').removeClass("active");  

    }).addClass('active');



}); //End Jquery