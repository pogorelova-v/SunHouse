$(document).ready(function () {
    $(window).scroll(function () {
        const scrollTop = $(window).scrollTop();

        const header = $(".header--js");
        const headerDuplicate = $(".header-duplicate--js");
        const headerHeight = header.outerHeight();

        if (scrollTop > headerHeight) {
            headerDuplicate.addClass("fixed");
        } else {
            headerDuplicate.removeClass("fixed")
        }
    });
})