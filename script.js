// Устанавливаем дату открытия
const launchDate = new Date("2026-06-06T12:12:12").getTime();

const timer = setInterval(() => {
  const now = new Date().getTime();
  const diff = launchDate - now;

  if (diff <= 0) {
    document.getElementById('timer').innerHTML = "<h2>Мы <a onclick=\"alert('Тут будет ссылка на сайт!');\"><u>открылись!</u></a></h2>";
    clearInterval(timer);
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("days").textContent = days.toString().padStart(2, '0');
  document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
  document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
  document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');
}, 1000);

let t = 0;

function animateInfinityBackground() {
  // Настройки движения
  const speed = 0.015; // скорость движения
  const xAmp = 40; // амплитуда по оси X (%)
  const yAmp = 25; // амплитуда по оси Y (%)

  // Вычисление позиции в форме знака бесконечности
  const x = 50 + Math.sin(t) * xAmp;
  const y = 50 + Math.sin(t * 2) * yAmp;

  // Применение к фону
  document.body.style.backgroundPosition = `${x}% ${y}%`;

  t += speed;
  requestAnimationFrame(animateInfinityBackground);
}

// Запуск после загрузки страницы
window.addEventListener("load", animateInfinityBackground);

document.addEventListener('DOMContentLoaded', () => {
  const disabledBtns = document.querySelectorAll('.social-btn.disabled');

  disabledBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();

      // Создаём элемент popup
      const popup = document.createElement('div');
      popup.className = 'popup';
      popup.textContent = 'Discord-сервер пока недоступен :(';
      document.body.appendChild(popup);

      // Показываем
      setTimeout(() => popup.classList.add('show'), 10);

      // Удаляем через 2 секунды
      setTimeout(() => {
        popup.classList.remove('show');
        setTimeout(() => popup.remove(), 300);
      }, 3500);
    });
  });
});
