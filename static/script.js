document.addEventListener("DOMContentLoaded", function () {
  const texto = "Python e Web Developer";
  const elemento = document.getElementById("texto-digitando");
  let i = 0;

  function digitar() {
    if (i < texto.length) {
      elemento.textContent += texto.charAt(i);
      i++;
      setTimeout(digitar, 100);
    }
  }

  digitar();
});
