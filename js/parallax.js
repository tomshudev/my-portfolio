$(document).ready(() => {
  let parallaxInstance;

  let PAGES = {
    HOME: { index: 0, name: "home" },
    ABOUT: { index: 1, name: "about" },
    WORK: { index: 2, name: "work" },
  };

  homeInFirst();
  parallaxInstance = moonsScene();
  $(window).on("load", function () {
    stopAutoolay();
  });

  let prevIndex = 0;

  let fullPage = new fullpage("#fullpage", {
    autoScrolling: true,
    scrollHorizontally: true,
    easingcss3: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    scrollingSpeed: /*1e3*/ 1200,
    anchors: ["home", "1", "2"],
    onLeave: (origin, destination, direction) => {
      if (origin) {
        handleCurrentSection(destination.index, origin.index);
      }

      handlePageOut(prevIndex);
      handlePageIn(destination.index);
      prevIndex = destination.index;
    },
  });

  function handlePageIn(index) {
    switch (index) {
      case PAGES.HOME.index: {
        parallaxInstance = moonsScene();
        homeIn();

        break;
      }
      case PAGES.ABOUT.index: {
        aboutIn();

        break;
      }
      case PAGES.WORK.index: {
        workIn();
        startAutoolay();

        break;
      }
    }
  }

  function handlePageOut(pageOutIndex) {
    switch (pageOutIndex) {
      case PAGES.HOME.index: {
        homeOut();

        break;
      }
      case PAGES.ABOUT.index: {
        aboutOut();

        break;
      }
      case PAGES.WORK.index: {
        stopAutoolay();

        break;
      }
    }
  }

  function handleCurrentSection(index, prevIndex) {
    let prevElem = document.querySelector(`#nav-link--${prevIndex}`);
    let nextElem = document.querySelector(`#nav-link--${index}`);

    prevElem.classList.remove("navigation--link__selected");
    nextElem.classList.add("navigation--link__selected");
  }
});
