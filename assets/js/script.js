let precio = 100000;
let cantidad = document.querySelector("#cantidad");
let color = document.querySelector("#color");

let paintCant = document.querySelector("#paintCant");
let paintTotal = document.querySelector("#paintTotal");
let paintColor = document.querySelector("#paintColor");

let mas = document.querySelector("#mas");
let menos = document.querySelector("#menos");
let reset = document.querySelector("#reset");

mas.addEventListener("click", function () {
  cantidad.innerHTML++;
  paintTotal.innerHTML = (precio * cantidad.innerHTML).toLocaleString("es-CL");
});

menos.addEventListener("click", function () {
  cantidad.innerHTML--;
  paintTotal.innerHTML = (precio * cantidad.innerHTML).toLocaleString("es-CL");
});

color.onchange = () => {
  paintColor.style.backgroundColor = color.value;
};

reset.onclick = () => {
  cantidad.innerHTML = 0;
  paintTotal.innerHTML = 0;
  paintColor.style.backgroundColor = "white";
};
