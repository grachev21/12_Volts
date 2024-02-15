let button_next = document.querySelector(".next");
let button_back = document.querySelector(".back")
let number = 3 * 386
let len_back = document.querySelectorAll(".view-window > img").length * 360 - number
let value = 0;


console.log(len_back, "<<<")

button_next.addEventListener("click", 
  function () {
    block_management("button_next")
  });


button_back.addEventListener("click", 
  function () {
    block_management("button_back")
  });


function block_management(block) {

  let slide = document.querySelector(".view-window");

  if (block == "button_next"){
    value = value - 386
    if (value < -len_back) {
      slide.style.left = 0 
      value = 0
    } else {
      console.log(-len_back, "-", value)
      slide.style.left = `${value}px`;
    }
  };

  if (block == "button_back"){
    value = value + 386
    if (value < len_back){
      slide.style.left = 0
      value = 0
    } else {
      console.log(value)
      slide.style.left = `${value}px`;
    }
  };


 
  // let style = window.getComputedStyle(block, null).right[0];
  // console.log(style-400)
}
