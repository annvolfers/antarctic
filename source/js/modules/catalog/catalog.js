export class Catalog {
  constructor() {
    this.cruiseCards = document.querySelectorAll('.catalog__item');
  }

  init() {
    if (this.cruiseCards.length) {
      window.addEventListener('resize', this.debounce(this.setTitleHeight));
    }

    this.setTitleHeight();
  }

  setTitleHeight() {
    this.cruiseCards.forEach((cruiseCard) => {
      const content = cruiseCard.querySelector('.catalog__item-content-wrapper');
      const title = cruiseCard.querySelector('h3');
      const titleHeight = title.offsetHeight;
      content.style.setProperty('--titleHeight', `${titleHeight}px`);
    });
  }

  debounce(callback, timeoutDelay = 100) {
    let timeoutId;

    return (...rest) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
    };
  }
}
