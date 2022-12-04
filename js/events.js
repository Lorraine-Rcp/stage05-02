import {
  playBtn,
  pauseBtn,
  stopBtn,
  moreBtn,
  lessBtn,
  forest,
  rain,
  coffee,
  fp,
  rainSvg,
  forestSvg,
  fpSvg,
  coffeeSvg,
  dayTheme,
  nightTheme,
  html
} from "./elements.js";

export default function ({ controls, sounds, timer }) {
  //<<<CONTROLS>>>//

  playBtn.addEventListener("click", function () {
    controls.play();
    sounds.Click();
    timer.countdown();
  });

  pauseBtn.addEventListener("click", function () {
    controls.pause();
    sounds.Click();
    timer.pauseTimer();
  });

  stopBtn.addEventListener("click", function () {
    sounds.Click();
    controls.resetControls();
    timer.reset();
  });

  moreBtn.addEventListener("click", function () {
    sounds.Click();
    timer.addMinutes();
  });

  lessBtn.addEventListener("click", function () {
    sounds.Click();
    timer.removeMinutes();
  });

  //<<<SOUND CARDS>>>//

  forest.addEventListener("click", function () {
    forest.classList.toggle("active");
    forestSvg.classList.toggle("color");
    forest.className === "forest active"
      ? sounds.forestSound.play()
      : sounds.forestSound.pause();
  });

  rain.addEventListener("click", function () {
    rain.classList.toggle("active");
    rainSvg.classList.toggle("color");
    rain.className === "rain active"
      ? sounds.rainSound.play()
      : sounds.rainSound.pause();
  });

  coffee.addEventListener("click", function () {
    coffee.classList.toggle("active");
    coffeeSvg.classList.toggle("color");
    coffee.className === "coffee active"
      ? sounds.coffeeSound.play()
      : sounds.coffeeSound.pause();
  });

  fp.addEventListener("click", function () {
    fp.classList.toggle("active");
    fpSvg.classList.toggle("color");
    fp.className === "fp active"
      ? sounds.fpSound.play()
      : sounds.fpSound.pause();
  });

  function toggleTheme() {
    nightTheme.classList.toggle("hide");
    dayTheme.classList.toggle("hide");
    html.classList.toggle("dark-theme");
  }

  dayTheme.addEventListener("click", function () {
    toggleTheme();
  });

  nightTheme.addEventListener("click", function () {
    toggleTheme();
  });

}
