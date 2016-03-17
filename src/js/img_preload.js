var $j = jQuery.noConflict();
$j(document).ready(function ($) {
    $("div.img-preload").each(function () {
        imageUrl = $(this).attr("data-src");
        if (imageUrl) {
            if (imageUrl.length !== 0) {
                var loader = new Image();
                loader.src = imageUrl;

                $(this).find('.fa').addClass('hide');
                if ($(this).hasClass('append-image')) {

                    if ($(this).attr('data-class')) {
                        $class = $(this).attr('data-class');
                    } else {
                        $class = 'img-responsive';
                    }
                    $(this).append('<img src="' + imageUrl + '" class="' + $class + '" style="display: none" />');
                    $(this).find('img').fadeIn(1000);
                } else {
                    $(this).attr('style', 'background-image: url("' + imageUrl + '")');
                }
                $(this).addClass('img-loaded');
            }
        }
    });

});
