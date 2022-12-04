export default function Controls({ playBtn, pauseBtn, resetControls }) {
  function play() {
    playBtn.classList.toggle("hide");
    pauseBtn.classList.toggle("hide");
  }

  function pause() {
    playBtn.classList.toggle("hide");
    pauseBtn.classList.toggle("hide");
  }

  function resetControls() {
    playBtn.classList.remove("hide");
    pauseBtn.classList.add("hide");
  }

  return {
    play,
    pause,
    resetControls,
  };
}

