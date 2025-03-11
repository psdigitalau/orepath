import lottie from 'lottie-web';

export default function initLottieAnimation() {
  const container = document.querySelector('#animated-logo');

  const animationPath = '/orepath/orepath.json';

  lottie.loadAnimation({
    container,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: animationPath,
  });
}
