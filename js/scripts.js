$(document).ready(function () {
    $('.accordion--js.expanded').each(function () {
        $(this).find('.accordion-body--js').slideDown()
    })

    $(document).on('click', '.accordion-head--js', function () {
        const accordion = $(this).closest('.accordion--js')
        const body = accordion.find('.accordion-body--js')

        if (accordion.hasClass('expanded')) {
            accordion.removeClass('expanded')
            body.slideUp()
        } else {
            $(this).closest('.accordion-group--js')
                .find('.accordion--js').each(function () {
                    $(this).removeClass('expanded')
                    $(this).find('.accordion-body--js').slideUp()
                })

            setTimeout(() => {
                accordion.addClass('expanded')
                body.slideDown()
            }, 0)
        }
    });
})
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
$(document).ready(function () {
  const maskOptions = {
    mask: "+{7} (000) 000-00-00",
  };

  const setTelCode = (input) => {
    $(input).val("+7 (");
    $(input)[0].dispatchEvent(new Event("input", { bubbles: true }));
  };

  $(document).on("focus", ".tel-input--js", function () {
    IMask($(this)[0], maskOptions);
    if (!$(this).val().length) {
      setTelCode($(this));
    }
  });

  $(document).on("input", ".tel-input--js", function () {
    if ($(this).val().length < 4) {
      setTelCode($(this));
    }
  });

  $(document).on("blur", ".tel-input--js", function () {
    if ($(this).val().length <= 4) {
      $(this).val("");
    }
  });
});
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
console.log(2+2)
  