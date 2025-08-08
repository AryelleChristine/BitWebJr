// Aguarda o DOM carregar para garantir que os elementos existam
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formEmail");
  const emailInput = document.getElementById("email");
  const mensagem = document.getElementById("mensagem-validacao");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); 
    const email = emailInput.value.trim();
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regexEmail.test(email)) {
    //   mensagem.textContent = "E-mail vÃ¡lido!";
    //   mensagem.style.color = "green";
        return 
    } else {
      mensagem.textContent = "E-mail invÃ¡lido. Use o formato nome@dominio.com";
      mensagem.style.color = "red";
    }
  });
});
