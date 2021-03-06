AOS.init({
  duration: 800,
  easing: "slide",
  once: false,
});

document.addEventListener("DOMContentLoaded", () => {
  const setYear = () => {
    const currentYear = new Date().getFullYear();
    document.querySelector(".year").innerHTML = currentYear;
  };
  setYear();

  const getRandomColor = () => {
    const colors = ["#fff", "#fd4d40", "#ffc107"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    return randomColor;
  };

  const animateIntro = () => {
    new TypeIt(".intro", {
      strings: "I'm Keith!",
      loop: true,
      afterStep: function (step, instance) {
        instance.getElement().style.color = getRandomColor();
      },
    }).go();
  };

  animateIntro();

  subliminalFlash(
    [
      "Subscribe",
      "Like his videos",
      "Share this website",
      "Share his videos",
      "Amazing website",
      "Keith is cute",
      "CUTE",
    ],
    {
      textColor: "rgba(253,77,64,0.9)",
      font: "2.5rem Arial",
      displayProbability: 0.15,
    }
  );
});

window.onload = function () {
  Particles.init({
    selector: ".background",
    color: ["#fff", "#fd4d40", "#ffc107"],
    sizeVariations: 5,
    responsive: [
      {
        breakpoint: 768,
        options: {
          color: ["#fff", "#fd4d40", "#ffc107"],
          sizeVariations: 4,
        },
      },
    ],
  });
};
