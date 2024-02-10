let button_next = document.querySelector(".next");
let value = 0;


button_next.addEventListener("click", 
  function () {
    block_management()
  });



function block_management() {
  console.log("next")
  let = block = document.querySelector("html body div.base-block div.content div.block-slider div.slider-window div.view-window");
  let style = window.getComputedStyle(block, null).right[0];
  // console.log(style-400)
  block.style.left = `${value=value - 360}px`;
}