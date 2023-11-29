const inputs = document.querySelectorAll(".input-with-tooltip");

inputs.forEach((item, index) => {
  item.children[0].addEventListener("input", function () {
    if (item.children[0].value.trim() === "") {
      item.children[0].classList.remove("campo-preenchido");
      item.children[0].classList.add("campo-nao-preenchido");
      item.children[1].classList.add("campo-obrigatorioshow");
    } else {
      item.children[0].classList.add("campo-preenchido");
      item.children[0].classList.remove("campo-nao-preenchido");
      item.children[1].classList.remove("campo-obrigatorioshow");
    }
  });
});

const form = document.getElementById("formulario");

form.onsubmit = function () {
  return validar();
};

function validar() {
  const inputs = document.querySelectorAll(".input-with-tooltip");
  let valido = true;

  inputs.forEach((input) => {
    input.children[0].dispatchEvent(new Event("input"));
    if (input.children[0].classList.contains("campo-nao-preenchido")) {
      valido = false;
    }
  });
  return valido;
}
