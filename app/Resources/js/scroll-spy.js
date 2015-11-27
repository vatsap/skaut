export default class {
  constructor(windowElement) {
    this.windowElement = windowElement;

    this.init();
  }

  init() {
    this.windowElement.addEventListener('scroll', () => {
      this.onScroll();
    });

    this.onScroll();
  }

  onScroll() {

  }
}
