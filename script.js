const cards = document.querySelector(".cards");
const images = document.querySelectorAll(".card_img");
const backgrounds = document.querySelectorAll(".card_bg");
const range = 40;

const calcValue = (a, b) => ((a / b) * range - range / 2).toFixed(1);

let timeout;

document.addEventListener("mousemove", ({ x, y }) => {
  if (timeout) {
    window.cancelAnimationFrame(timeout);
  }
  timeout = window.requestAnimationFrame(() => {
    const yValue = calcValue(y, window.innerHeight);
    const xValue = calcValue(x, window.innerWidth);
    cards.style.transform = `rotateX(${yValue}deg) rotateY(${xValue}deg)`;

    [].forEach.call(images, (image) => {
      image.style.transform = `translateX(${-xValue}px) translateY(${-yValue}px)`;
    });

    [].forEach.call(backgrounds, (background) => {
      background.style.backgroundPosition = `${xValue * 0.45}px ${-yValue * 0.45}px`;
    });
  });
},false);
