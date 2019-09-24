const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]


function init(e) {
  // Write your JavaScript code inside the init() function
  let index = 0;
 function onKeyDownHandler(e) {
    //e.stopPropagation();
    const key = parseInt(e.detail || e.which);
    if (code[index] === key){
      index++;
      if (index === code.length){
        alert("Hurray!");
        index = 0;
      }
    } else {
      index = 0;
    }
  
}

const body = document.querySelector('body');
body.addEventListener('keydown',init(val));