export default function mobileMenuFunctionality() {
  const mobileMenu = document.getElementById('mobile-menu');
  const menuButton = document.getElementById('mobile-menu-button');

  // Toggle menu function
  const toggleMenu = () => {
    if (mobileMenu.classList.contains('translate-x-full')) {
      mobileMenu.classList.remove('translate-x-full');
      menuButton.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" class="size-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>';
    } else {
      mobileMenu.classList.add('translate-x-full');
      menuButton.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" class="size-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg>';
    }
  };

  // Toggle menu when button is clicked
  menuButton.addEventListener('click', toggleMenu);

  // Close menu when any link inside mobile menu is clicked
  const mobileMenuLinks = mobileMenu.querySelectorAll('a');
  mobileMenuLinks.forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('translate-x-full');
      menuButton.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" class="size-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg>';
    });
  });
}
