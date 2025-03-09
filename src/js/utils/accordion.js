export default function initAccordions() {
  document.querySelectorAll('.accordion').forEach((accordion) => {
    const [header, content] = accordion.children;
    header.addEventListener('click', () => {
      const expanded = getComputedStyle(content).maxHeight !== '0px';
      header.classList.toggle('active', !expanded);
      content.style.maxHeight = expanded ? '0px' : `${content.scrollHeight}px`;
    });
  });
}
