const icon = document.getElementById('load');

// 🔑 Any key press → grow/shrink
document.addEventListener('keydown', () => {
  if (icon) {
    icon.classList.toggle('text-8xl');
  }
});

// ⏱ Stop spinning after 3 seconds
setTimeout(() => {
  if (icon) {
    window.location.href="captcha.html";
  }
}, 7000);
