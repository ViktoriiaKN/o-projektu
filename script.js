const currentPage = document.location.pathname.slice(1);
const links = document.querySelectorAll('nav a');

links.forEach((link) => {
  // Get the href attribute value of the current link
  const href = link.getAttribute('href');

  // Extract the part before the ".html" from the href
  const hrefWithoutExtension = href.split('.')[0];

  // Check if hrefWithoutExtension matches the currentPage
  if (hrefWithoutExtension === currentPage) {
    link.classList.add('active-nav');
  } else if (currentPage === '') {
    // If they match, assign the "active" class to the current link
    links[0].classList.add('active-nav');
  }
});
