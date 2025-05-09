let timerInterval;

function updateCountdown(targetDateStr) {
  clearInterval(timerInterval); // Limpa o cronômetro anterior

  const targetDate = new Date(targetDateStr);

  function calculate() {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
      document.querySelector(".countdown").textContent = "Tempo esgotado!";
      clearInterval(timerInterval);
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.querySelector(".countdown").textContent =
      `${days} dias ${hours} horas ${minutes} minutos ${seconds} segundos`;
  }

  calculate();
  timerInterval = setInterval(calculate, 1000);
}

document.querySelectorAll(".goal").forEach(goal => {
  goal.addEventListener("click", () => {
    const target = goal.getAttribute("data-target");

    // Atualiza o cronômetro
    updateCountdown(target);

    // Marca o objetivo clicado como ativo e remove dos outros
    document.querySelectorAll(".goal").forEach(g => g.classList.remove("active"));
    goal.classList.add("active");
  });
});
