const cuadroTexto = document.querySelector("input");
const botonAñadido = document.querySelector(".btn-add");
const listaTareas = document.querySelector("ul");
const empty = document.querySelector(".empty");

botonAñadido.addEventListener("click", (e) => {
  e.preventDefault();

  const Texto = cuadroTexto.value;
   if (Texto !== ""){

  const li$$ = document.createElement("li");

  const p$$ = document.createElement("p");
  p$$.textContent = Texto;

  li$$.appendChild(p$$);
  li$$.appendChild(addBotomDelete());
  listaTareas.appendChild(li$$);
  cuadroTexto.value = "";
  empty.style.display = "none";
   }
});

function addBotomDelete() {
    const deleteButtom = document.createElement ("button");
     deleteButtom.textContent = "X";
     deleteButtom.className = "borrado";

     deleteButtom.addEventListener("click", (e) => {
         const item = e.target.parentElement;
         listaTareas.removeChild(item);
     });
     return deleteButtom;
}
