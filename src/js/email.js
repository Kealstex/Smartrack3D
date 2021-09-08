jQuery(document).ready(function () {

	jQuery('form').submit(function (e) {
		e.preventDefault();
		jQuery.ajax({
			type: "POST",
			url: "mailer/mail.php",
			data: jQuery(this).serialize()
		}).done(function () {
			jQuery(this).find("input").val("");
			// jQuery('#consultation, #order').fadeOut();
			jQuery('#thanks').fadeIn('slow');

			jQuery('form').trigger('reset');
		});
		return false;
	});

	jQuery('.modal__close').on('click', function () {
		jQuery('#thanks').fadeOut('slow');
	});
});