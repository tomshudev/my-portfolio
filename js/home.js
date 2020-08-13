let homeInFirst = () => {
  anime({
    targets: ".navigation--link",
    translateX: ["-30rem", 0],
    delay: 300,
    duration: 200,
  });
  anime
    .timeline()
    .add({
      targets: ".curtain",
      translateY: [0, "-100%"],
      translateZ: 0,
      easing: "easeInOutCubic",
      duration: 800,
      complete: function () {
        $(".loader").addClass(".js-hidden");
      },
    })
    .add({
      targets: ".animate-heading",
      translateX: ["-105%", 0],
      easing: "easeInOutCubic",
      duration: 800,
      delay: function (el, i) {
        return 50 * i;
      },
      offset: "-=400",
    })
    .add({
      targets: ".navigation--scroll-down",
      translateY: ["20rem", 0],
      rotateZ: ["90deg", "90deg"],
      easing: "easeInOutCubic",
      duration: 600,
      offset: "-=800",
    })
    .add({
      targets: ".header-bold-lines",
      width: [0, "10rem"],
      opacity: [0, 1],
      translateX: ["-5rem", 0],
      easing: "easeInOutCubic",
      duration: 1000,
      offset: "-=600",
    })
    .add({
      targets: ".animate-clouds",
      translateX: ["100%", 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutCubic",
      duration: 800,
      delay: function (el, i) {
        return 50 * i;
      },
      offset: "-=1000",
    });
};

let homeIn = () => {
  anime({
    targets: ".animate-heading",
    translateX: ["-105%", 0],
    easing: "easeInOutCubic",
    duration: 800,
    delay: function (el, i) {
      return 50 * i;
    },
  });
  anime({
    targets: ".navigation--scroll-down",
    translateY: ["20rem", 0],
    rotateZ: ["90deg", "90deg"],
    easing: "easeInOutCubic",
    duration: 600,
  });
  anime({
    targets: ".header-bold-lines",
    width: [0, "10rem"],
    opacity: [0, 1],
    translateX: ["-5rem", 0],
    easing: "easeInOutCubic",
    duration: 1000,
  });

  anime({
    targets: ".animate-clouds",
    translateX: ["100%", 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutCubic",
    duration: 800,
    delay: function (el, i) {
      return 50 * i;
    },
  });
};

let homeOut = () => {
  anime({
    targets: ".animate-heading",
    translateX: [0, "-105%"],
    easing: "easeInOutCubic",
    duration: 800,
    delay: function (el, i) {
      return 50 * i;
    },
  });
  anime({
    targets: ".header-bold-lines",
    width: ["10rem", 0],
    opacity: [1, 0],
    translateX: [0, "-5rem"],
    easing: "easeInOutCubic",
    duration: 1000,
  });

  anime({
    targets: ".animate-clouds",
    translateX: [0, "100%"],
    translateZ: 0,
    opacity: [1, 0],
    easing: "easeOutCubic",
    duration: 800,
  });
  anime({
    targets: ".navigation--scroll-down",
    translateY: [0, "20rem"],
    rotateZ: ["90deg", "90deg"],
    easing: "easeInOutCubic",
    duration: 600,
  });
};

let moonsScene = () => {
  let scene = document.getElementById("scene");
  parallaxInstance = new Parallax(scene);

  return parallaxInstance;
};
