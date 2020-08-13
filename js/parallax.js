$(document).ready(() => {
  let parallaxInstance;

  $(window).on("load", function () {
    parallaxInstance = moonsScene();

    homeInFirst();
  });

  let prevIndex = 0;

  let fullPage = new fullpage("#fullpage", {
    autoScrolling: true,
    scrollHorizontally: true,
    easingcss3: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    scrollingSpeed: /*1e3*/ 1200,
    anchors: ["home", "1"],
    onLeave: (origin, destination, direction) => {
      if (origin) {
        handleCurrentSection(destination.index, origin.index);
      }

      if (destination.index === 0) {
        if (prevIndex === 1) {
          aboutOut();
        }

        parallaxInstance = moonsScene();
        homeIn();
      } else if (destination.index === 1) {
        if (prevIndex === 0) {
          homeOut();
        } else if (prevIndex === 2) {
        }

        aboutIn();
      } else if (destination.index === 2) {
        if (prevIndex === 1) {
          aboutOut();
        }

        anime({
          targets: ".work--number-box",
          translateY: ["100%", 0],
          easing: "easeInOutQuart",
          duration: 1400,
        });
        anime({
          targets: ".work__gallery--container",
          scale: [0.85, 1],
          easing: "easeInOutQuart",
          duration: 1200,
        });
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
      }

      prevIndex = destination.index;
    },
  });

  function handleCurrentSection(index, prevIndex) {
    let prevElem = document.querySelector(`#nav-link--${prevIndex}`);
    let nextElem = document.querySelector(`#nav-link--${index}`);

    prevElem.classList.remove("navigation--link__selected");
    nextElem.classList.add("navigation--link__selected");
  }
});
