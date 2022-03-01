let contdown=0;
const buttons=document.querySelectorAll('.timer__button');
const display=document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');


function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const dis = `${minutes}:${remainderSeconds < 10 ? '0' : '' }${remainderSeconds}`;
    display.textContent = dis;
  }
  
  function displayEndTime(timestamp) {
    const end = new Date(timestamp);
    const hour = end.getHours();
    const adjustedHour = hour > 12 ? hour - 12 : hour;
    const minutes = end.getMinutes();
    endTime.textContent = `Be Back At ${adjustedHour}:${minutes < 10 ? '0' : ''}${minutes}`;
  }
function timer(seconds) {
    // clear any existing timers
    clearInterval(contdown);
  
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);
    displayEndTime(then);
  
    contdown = setInterval(() => {
      const secondsLeft = Math.round((then - Date.now()) / 1000);
      // check if we should stop it!
      if(secondsLeft < 0) {
        clearInterval(contdown);
        return;
      }
      // display it
      displayTimeLeft(secondsLeft);
    }, 1000);
  }
function start()
{
    const sec=parseInt(this.dataset.time);
    timer(sec);
}
buttons.forEach(button=> button.addEventListener('click',start))
document.customForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const mins = this.minutes.value;
  console.log(mins);
  timer(mins * 60);
  this.reset();
});
console.log(display);

// setInterval((display) => {
//     if(contdownmin>0)
//     contdownmin=contdownmin-1;
//     console.log(contdownmin);
//    console.log(display);
   
// }, 100);



