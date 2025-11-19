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