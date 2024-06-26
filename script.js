//add .active class for the active page in the nav:
const currentPage = document.location.pathname.slice(12).split('.')[0];
const links = document.querySelectorAll('nav a');

links.forEach((link) => {
  const href = link.getAttribute('href');
  const hrefWithoutExtension = href.split('.')[0];

  if (hrefWithoutExtension === currentPage) {
    link.classList.add('active-nav');
  }
});

//teaser search

const questionary = document.querySelector('.questionary');
const teaser = document.querySelector('.teaser');

const afterSubmit = (event) => {
  event.preventDefault();
  teaser.innerHTML = `
  <p class="teaser__text">
    ha-ha!<br>wait for Volando to be released!
  </p>
  `;
};

questionary.addEventListener('submit', afterSubmit);
