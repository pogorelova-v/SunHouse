$(document).ready(function () {
    $(document).on("click", ".open-modal--js", function () {
        $(".overlay--js").fadeIn();
        $(`[data-modal="${$(this).data("modal-open")}"]`).fadeIn();
        $("html").toggleClass("not-scroll");
    });
});

$(document).ready(function () {
    $(document).on("click", ".close-modal--js", function () {
        $(".overlay--js").fadeOut();
        $(this).closest(".modal--js").fadeOut();
        $("html").toggleClass("not-scroll");
    });
});

$(document).ready(function () {
    $(document).on("click", ".overlay--js", function () {
        $(this).fadeOut();
        $(".modal").fadeOut();
        $("html").toggleClass("not-scroll");
    });
});