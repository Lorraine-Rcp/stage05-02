export default function Sounds() {
  const forestSound = new Audio("./assets/forest.wav");
  const rainSound = new Audio("./assets/rain.wav");
  const coffeeSound = new Audio("/assets/coffee.wav");
  const fpSound = new Audio("./assets/fireplace.wav");
  const beep = new Audio("./assets/beep.wav");

  function Click() {
    beep.play();
  }

  forestSound.loop = true;
  rainSound.loop = true;
  coffeeSound.loop = true;
  fpSound.loop = true;

  return {
    Click,
    forestSound,
    rainSound,
    coffeeSound,
    fpSound,
  };
}
