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