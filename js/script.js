const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const gameOverScreen = document.getElementById('game-over');

const jump = () => {
  mario.classList.add('jump');

  setTimeout(() => {
    mario.classList.remove('jump');
  }, 900); 
};


const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;
  
    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`;
  
    mario.src = 'img/game-over.png';
    mario.style.width = '75px';
    mario.style.marginLeft = '50px';
  
    clouds.style.animation = 'none';
    clouds.style.left = `${parseInt(window.getComputedStyle(clouds).right)}px`;
  
    gameOverScreen.classList.remove('hide');
    clearInterval(loop);
  }
  
}, 10);


document.addEventListener('keydown', jump);


function restartGame() {
  location.reload();
}
