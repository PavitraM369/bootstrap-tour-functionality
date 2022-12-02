(function () {
  var name = "Pavitra";
  var tour = new Tour({
    storage: false,
  });
  tour.addSteps([
    {
      element: ".tour-step.tour-step-one",
      placement: "bottom",
      title: "Welcome to edureka!",
      content:
        "We Would like to know your name ? <br><input class='form-control' type='text' name='your_name'/>",
      onNext: function () {
        var nameProvided = $("input[name=your_name]").val();
        if ($.trim(nameProvided) !== "") {
          name = nameProvided;
        }
      },
    },
    {
      element: ".tour-step.tour-step-two",
      placement: "bottom",
      title: function () {
        return "Welcome to edureka!, " + name;
      },
      content: "we offer instructor-led live classes",
    },
    {
      element: ".tour-step.tour-step-three",
      placement: "bottom",
      title: function () {
        return "Welcome to edureka, " + name;
      },
      content: "we offer the flexibility to change the batch/class at anytime",
    },
    {
      element: ".tour-step.tour-step-four",
      placement: "bottom",
      title: function () {
        return "Welcome to edureka!, " + name;
      },
      content: "we offer 24 X 7 support to our customer",
    },
    {
      element: ".tour-step.tour-step-five",
      placement: "top",
      title: function () {
        return "Welcome to edureka!, " + name;
      },
      content: "Checkout our fresh baked courses",
    },
    {
      element: ".tour-step.tour-step-six",
      placement: "top",
      title: function () {
        return "Welcome to edureka!, " + name;
      },
      content: "Sign up to get started with edureka!",
    },
    {
      placement: "top",
      orphan: true,
      title: function () {
        return "Thank you, " + name;
      },
      content: function () {
        return "we wish you happy learning with edureka!";
      },
    },
  ]);

  tour.init();

  tour.start();
})();
