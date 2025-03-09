export default function updateFooterYear() {
  document.getElementById('year').textContent = new Date().getFullYear();
}
