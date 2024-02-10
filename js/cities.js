const $block_1 = document.getElementsByClassName("block-1").item(0)
const $exitCities = document.getElementById("exitCities")
const $cities = document.getElementById("cities")
const $item_cities = document.querySelectorAll(".block_cities_list > p")
console.log($item_cities)

$block_1.addEventListener("mouseenter",
  function () {
    add_color(this, bcolor="white");
});

$block_1.addEventListener("mouseleave",
  function () {
    add_color(this, bcolor="#e0ecfa");
});

$block_1.addEventListener("click",
function () {
    showExitCities("show");
});

$exitCities.addEventListener("click",
function () {
  showExitCities("exit");
});

for(let i = 0; i < $item_cities.length; i ++) {

  $item_cities[i].addEventListener("mouseenter",
  function () {
    add_color(this, bcolor="red")
  });

  $item_cities[i].addEventListener("mouseleave",
  function () {
    add_color(this, bcolor="white")
  });

}
// ----
function add_color(el, bcolor) {
  el.style.background = bcolor;
}


function showExitCities(value) {
  if (value === "show") {
    $cities.style.display = "block";
  } else if (value === "exit") {
    $cities.style.display = "none";
  }
}

function exitCities() {
  $cities.style.display = "none";
}

