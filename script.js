const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

menuToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', open);
});
document.querySelectorAll('.main-nav a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded', 'false');
}));

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('copyTill')?.addEventListener('click', async () => {
  const till = document.getElementById('tillNumber').textContent.trim();
  try {
    await navigator.clipboard.writeText(till);
    const btn = document.getElementById('copyTill');
    const old = btn.textContent;
    btn.textContent = 'Copied ✓';
    setTimeout(() => btn.textContent = old, 1800);
  } catch {
    alert('M-Pesa Till Number: ' + till);
  }
});

document.getElementById('enquiryForm')?.addEventListener('submit', e => {
  e.preventDefault();
  const f = new FormData(e.currentTarget);
  const message = [
    'Hello Felam Research Consultancy,',
    '',
    `Name: ${f.get('name')}`,
    `Phone/WhatsApp: ${f.get('phone')}`,
    `Email: ${f.get('email') || 'Not provided'}`,
    `Academic level: ${f.get('level')}`,
    `Service: ${f.get('service')}`,
    '',
    'Project details:',
    f.get('message')
  ].join('\n');

  const url = 'https://wa.me/254726563754?text=' + encodeURIComponent(message);
  window.open(url, '_blank', 'noopener');
});
