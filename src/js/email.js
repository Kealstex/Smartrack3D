jQuery(document).ready(function () {

	jQuery('form').submit(function (e) {
		e.preventDefault();
		jQuery.ajax({
			type: "POST",
			url: "mailer/smart.php",
			data: jQuery(this).serialize()
		}).done(function () {
			jQuery(this).find("input").val("");
			// jQuery('#consultation, #order').fadeOut();
			// jQuery('.overlay, #thanks').fadeIn('slow');

			jQuery('form').trigger('reset');
		});
		return false;
	});
});