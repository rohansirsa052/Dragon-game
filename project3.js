score = 0;
cross = true;
setTimeout(() => {
  audio.play();
}, 1000);
audio = new Audio("music.mp3");
audiogo = new Audio("gameover.mp3");

document.onkeydown = function (e) {
  console.log("Key coe is", e.keyCode);
  if (e.keyCode == 38) {
    dino = document.querySelector(".dino");
    dino.classList.add("animateDino");
    setTimeout(() => {
      dino.classList.remove("animateDino");
    }, 700);
  } else if (e.keyCode == 39) {
    dino = document.querySelector(".dino");
    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));
    dino.style.left = dx + 112 + "px";
  } else if (e.keyCode == 37) {
    dino = document.querySelector(".dino");
    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));
    dino.style.left = dx - 150 + "px";
  }
};

setInterval(() => {
  dino = document.querySelector(".dino");
  gameOver = document.querySelector(".gameOver");
  dragon = document.querySelector(".dragon");

  dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));
  dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue("top"));

  ox = parseInt(window.getComputedStyle(dragon, null).getPropertyValue("left"));
  oy = parseInt(window.getComputedStyle(dragon, null).getPropertyValue("top"));

  offsetX = Math.abs(dx - ox);
  offsetY = Math.abs(dy - oy);

  if (offsetX < 73 && offsetY < 52) {
    gameOver.style.visibility = "visible";
    dragon.classList.remove("animateDragon");

    audiogo.play();
    audio.pause();
  } else if (offsetX < 135 && cross) {
    score += 1;
    updateScore(score);
    cross = false;
    setTimeout(() => {
      cross = true;
    }, 1000);

    setTimeout(() => {
      aniDur = parseFloat(
        window
          .getComputedStyle(dragon, null)
          .getPropertyValue("animation-duration")
      );
      newDur = aniDur - 0.1;
      console.log(newDur);
      dragon.style.animationDuration = newDur + "s";
    }, 1000);
  }
}, 10);

function updateScore(score) {
  scoreCount.innerHTML = "Your Score:-" + score;
}
