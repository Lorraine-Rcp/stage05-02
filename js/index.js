import Controls from "./controls.js";
import Timer from "./timer.js";
import Sounds from "./sounds.js";
import Events from "./events.js";
import {
  playBtn,
  pauseBtn,
  minutesDisplay,
  secondsDisplay,
  forest,
  rain,
  coffee,
  fp,
  sliderForest,
  sliderRain,
  sliderCoffee,
  sliderFp,
} from "./elements.js";

let controls = Controls({
  playBtn,
  pauseBtn,
  forest,
  rain,
  coffee,
  fp,
});

const sounds = Sounds();

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.stop,
});

Events({ controls, sounds, timer });

sliderForest.addEventListener("input", function () {
  sounds.forestSound.volume = sliderForest.value;
});

sliderRain.addEventListener("input", function () {
  sounds.rainSound.volume = sliderRain.value;
});

sliderCoffee.addEventListener("input", function () {
  sounds.coffeeSound.volume = sliderCoffee.value;
});

sliderFp.addEventListener("input", function () {
  sounds.fpSound.volume = sliderFp.value;
});
