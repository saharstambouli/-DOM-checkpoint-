console.log('helo world')


document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
  });



//select elements 
var btn= document.getElementById('change-color-btn') ;
var box =  document.getElementById('color-box') ;

console.log('button',btn)
console.log('box',box)



// implement a function that generates a random color. 
  function getRandomColor(number) {

    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;


  }
  console.log(getRandomColor(5))

 //changing the color of button with the function

 btn.addEventListener('click', function() {
  var  randomColor = getRandomColor();
  box.style.backgroundColor = randomColor;
});
 
 
 
 
 
 
 
