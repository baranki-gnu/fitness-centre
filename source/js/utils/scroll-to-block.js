function scrollToBlock(link, targetBlock) {
  if (link && targetBlock) {
    link.addEventListener('click', (evt) => {
      evt.preventDefault();
      targetBlock.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      });
    });
  }
}

function turnScrollOn() {
  let buyButton = document.querySelector('[data-buy-pass]');
  let exercisePasses = document.querySelector('[data-exercise-pass]');
  scrollToBlock(buyButton, exercisePasses);
}

export {turnScrollOn};
