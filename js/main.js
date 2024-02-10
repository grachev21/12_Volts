const catalog = document.getElementsByClassName("block-product")

for (let i = 0; i < catalog.length; i ++){

    let class_name = catalog[i].children[0]

    class_name.addEventListener("mouseenter",
        function () { 
            changeColor(this, color="red", bcolor="white", height="300px", zIndex=100); 
            add_description(true);
        });

    class_name.addEventListener("mouseleave",
        function () { 
            changeColor(this, color="black", bcolor="#e0ecfa", height="6px", zIndex=0); 
            add_description(false)
        });
}



function changeColor(el, color, bcolor, height, zIndex) {
    el.style.color = color
    el.style.background = bcolor;
    el.style.height = height;
    el.style.zIndex = zIndex
}

function add_description(check) {
    let description = document.getElementById("description");
    let spinner = document.getElementById("spinner");
    if(check) {
        description.style.display = "block";
        spinner.style.display = "none";
    } else {
        description.style.display = "none";
        spinner.style.display = "block";
    }
}