//Animação de Escrita no Subtítulo do Perfil

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

// Animações Menu Hambuguer

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");

  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("ativo");
    menuToggle.classList.toggle("ativo");
    const aberto = menu.classList.contains("ativo");
    menuToggle.setAttribute("aria-expanded", aberto);
  });

  document.querySelectorAll(".menu-link").forEach(link => {
    link.addEventListener("click", () => {
      if (menu.classList.contains("ativo")) {
        menu.classList.remove("ativo");
        menuToggle.classList.remove("ativo");
        menuToggle.setAttribute("aria-expanded", "false");
      }
    });
  });
});
