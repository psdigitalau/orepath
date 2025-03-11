export default function initParallax() {
  const parallaxImages = document.querySelectorAll('[data-parallax]');

  if (parallaxImages.length < 1) return;

  parallaxImages.forEach((parallaxImage) => {
    // Fix missing closing parenthesis
    parallaxImage.style.setProperty('transform', 'scale(1.01)');

    // Create a single scroll listener instead of multiple
    const handleScroll = () => {
      // Get element's position relative to viewport
      const rect = parallaxImage.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Check if element is visible in viewport
      if (rect.top < viewportHeight && rect.bottom > 0) {
        // Calculate how far the element is from the center of the viewport
        const distanceFromCenter = rect.top + rect.height / 2 - viewportHeight / 2;
        // Adjust parallax speed based on element position
        const yOffset = distanceFromCenter * -0.8;
        const newTransform = `scale(1.01) translate3d(0, ${yOffset}px, 0)`;
        parallaxImage.style.setProperty('transform', newTransform);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Run once on load to set initial position
    handleScroll();
  });
}
