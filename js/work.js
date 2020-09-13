let workIn = () => {
  anime({
    targets: ".work--number-box",
    translateY: ["100%", 0],
    easing: "easeInOutQuart",
    duration: 1400,
  });

  // Show gallery
  anime({
    targets: ".work__gallery--container",
    opacity: [0, 1],
    duration: 0,
  });

  // Scaling out gallery
  anime({
    targets: ".work__gallery--container",
    scale: [0.85, 1],
    easing: "easeInOutQuart",
    duration: 1200,
  });

  // Animating text in
  anime({
    targets: ".animate-page-2",
    translateX: ["-105%", 0],
    easing: "easeInOutCubic",
    duration: 800,
    delay: function (el, i) {
      return 50 * i;
    },
  });

  anime({
    targets: ".work-bold-lines",
    width: [0, "10rem"],
    opacity: [0, 1],
    translateX: ["-5rem", 0],
    easing: "easeInOutCubic",
    duration: 1000,
  });

  anime({
    delay: 400,
    targets: ".work__image-image",
    translateY: [0, "110%"],
    translateZ: 0,
    easing: "easeInOutQuart",
    duration: function (el, i) {
      return 1200 - 200 * i;
    },
  });
};

let startAutoolay = () => {
  $("#gallery").fotorama().data("fotorama").startAutoplay(5000);
};

let stopAutoolay = () => {
  $("#gallery").fotorama().data("fotorama").stopAutoplay();
};
