const btnLeft = document.getElementById("left");
const btnRight = document.getElementById("right");
const pokemon = document.querySelector(".Pokemon");

const titulo = document.querySelector(".title");
const texto = ["Mimikyu", "Charmander", "Gengar"];
let position = 0;

const actualizar = () => {
  switch (position) {
      case 0:
        btnLeft.style.color = "transparent";
        btnLeft.style.background = "transparent";
        btnRight.style.background = "#dcc794c7";
        break;
        case 1:
        btnLeft.style.color = "black";
      btnLeft.style.background = "#c6711dd2";
      btnRight.style.background = "#c6711dd2";
      btnRight.style.display = "flex";

      break;
      case 2:
      btnLeft.style.background = "#56447ad2";
      btnRight.style.display = "none";
      break;

    default:
      break;
  }

  pokemon.classList.remove("Pokemon");
  void pokemon.offsetWidth;
  pokemon.classList.add("Pokemon");

  titulo.classList.remove("title");
  void pokemon.offsetWidth;
  titulo.classList.add("title");

  titulo.innerHTML = texto[position];
  document.body.style.setProperty("--position", position);
};
const siguiente = () => {
  if (position < 2) position++;
  actualizar();
};
const anterior = () => {
  if (position > 0) position--;
  actualizar();
};
actualizar();

btnLeft.onclick = anterior;
btnRight.onclick = siguiente;
