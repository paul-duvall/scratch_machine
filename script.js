window.addEventListener('keydown', function(e){
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  
  if(!audio) return; // Stops the function if no audio is associated with key pressed
  audio.currentTime = 0; // Rewind current sound to the start to enable rapid replay of sound
  audio.play(); // Plays the audo
  key.classList.add('playing');
});

function removeTransition(e) {
  if(e.propertyName !== 'transform') return; // Skip the function if no transform has happened
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach( key => key.addEventListener('transitionend', removeTransition));

