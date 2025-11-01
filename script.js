// CATEGORY FILTER
const filterButtons = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.card');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const category = btn.dataset.category;

    cards.forEach(card => {
      card.style.display = (category === 'all' || card.dataset.category === category)
        ? 'block' : 'none';
    });
  });
});

// LANGUAGE TOGGLE
const langBtn = document.getElementById('lang-toggle');
let lang = 'en';
langBtn.addEventListener('click', () => {
  lang = (lang === 'en') ? 'hi' : 'en';
  document.querySelectorAll('[data-en]').forEach(el => {
    el.textContent = el.dataset[lang];
  });
  if (lang === 'hi') {
    langBtn.textContent = '🇬🇧 English';
    document.getElementById('store-name').textContent = 'एन के आटा चक्की एवं किराना स्टोर';
  } else {
    langBtn.textContent = '🇮🇳 Hindi';
    document.getElementById('store-name').textContent = 'NK Atta Chakki & Kirana Store';
  }
});
