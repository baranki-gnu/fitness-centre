function removeReviewsNoJs() {
  let reviewsContainer = document.querySelector('[data-reviews-container]');

  if (reviewsContainer) {
    reviewsContainer.classList.remove('reviews__inner-container--nojs');
  }

}

export {removeReviewsNoJs};
