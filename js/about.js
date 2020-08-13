let aboutIn = (prevIndex) => {
  // Show image
  anime({
    delay: 200,
    targets: ".about__image",
    opacity: [0, 1],
    duration: 0,
  });

  // Animate image coming in
  anime({
    delay: 200,
    targets: ".about__image-image",
    translateY: [0, "110%"],
    translateZ: 0,
    easing: "easeInOutQuart",
    duration: function (el, i) {
      return 1200 - 200 * i;
    },
  });

  // Animate image scaling out
  anime({
    delay: 400,
    targets: ".image__about",
    scale: [0.85, 1],
    easing: "easeInOutQuart",
    duration: 1200,
  });

  // Animate number box in
  anime({
    delay: 400,
    targets: ".about__image--number-box",
    translateY: ["100%", 0],
    easing: "easeInOutQuart",
    duration: 1400,
  });

  // Animate text in
  anime({
    delay: 400,
    targets: ".animate-page-1",
    translateX: ["-105%", 0],
    easing: "easeInOutCubic",
    duration: 800,
    delay: function (el, i) {
      return 50 * i;
    },
  });

  // Animate the bars on the side
  anime({
    delay: 400,
    targets: ".about-bold-lines",
    width: [0, "10rem"],
    opacity: [0, 1],
    translateX: ["-5rem", 0],
    easing: "easeInOutCubic",
    duration: 1000,
  });
};

let aboutOut = () => {
  // Hide image
  anime({
    delay: 200,
    targets: ".about__image",
    opacity: [1, 0],
    easing: "easeInOutQuart",
    duration: 1200,
  });

  // Animate number box out
  anime({
    targets: ".about__image--number-box",
    translateY: [0, "100%"],
    easing: "easeInOutQuart",
    duration: 1400,
  });

  // Animate image scaling in
  anime({
    targets: ".image__about",
    scale: [1, 0.85],
    easing: "easeInOutQuart",
    duration: 1200,
  });

  // Animate the bars on the side
  anime({
    targets: ".about-bold-lines",
    width: ["10rem", 0],
    opacity: [1, 0],
    translateX: [0, "-5rem"],
    easing: "easeInOutCubic",
    duration: 1000,
  });

  // Animate text out
  anime({
    targets: ".animate-page-1",
    translateX: [0, "-105%"],
    easing: "easeInOutCubic",
    duration: 800,
    delay: function (el, i) {
      return 50 * i;
    },
  });
};
