const designCard = document.querySelectorAll('.desing-card');
designCard.forEach((card) => {
  card.addEventListener('click', (e) => {
    const href = card.querySelector('a').getAttribute('href');
    window.location.href = href;
  });
});
