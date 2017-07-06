$( document ).ready(function() {
  var choicesSelect = new Choices('#choices-single-default', {
    removeItemButton: true,
    searchEnabled: false,
    itemSelectText: ""
  });

  $("#contactForm").validate({
    rules: {
      name: "required",
      email: "required",
      phone: "required"
    },
    errorPlacement: function(error, element){},
    focusInvalid: false
  });
});
