import * as common from './common';

const NAVIGATION_OPEN_CLASS = 'navigation--open';
const NAVIGATION_INVERTED_CLASS = 'navigation--inverted';
const NAVIGATION_LIST_ITEM_CLASS = 'navigation__item';
const NAVIGATION_LIST_ITEM_ACTIVE_CLASS = 'navigation__item--active';
const NAVIGATION_ARROW_ANIMATED_CLASS = 'navigation__arrow--animated';
const HEADER_HAS_NAVIGATION_OPEN_CLASS = 'header--has-navigation-open';
const HEADER_INVERTED_CLASS = 'header--inverted';
const HEADER_STICKY_CLASS = 'header--sticky';
const HEADER_STICKY_VISIBLE_CLASS = 'header--sticky--visible';

export default class {
  constructor(headerElement, bodyElement, windowElement) {
    this.headerElement = headerElement;
    this.bodyElement = bodyElement;
    this.windowElement = windowElement;
    this.headerClonedElement = null;
    this.navigationClonedElement = null;
    this.isOpen = false;

    this.init();
  }

  init() {
    this.headerBrandElement = this.headerElement.querySelector('#header-brand');
    this.navigationElement = this.headerElement.querySelector('#navigation');
    this.navigationArrowElement = this.headerElement.querySelector('#navigation-arrow');
    this.navigationListElement = this.headerElement.querySelector('#navigation-list');
    this.navigationToggleElement = this.headerElement.querySelector('#navigation-toggle');

    this.navigationToggleElement.addEventListener('click', () => {
      if (this.isOpen) {
        this.headerElement.classList.remove(HEADER_HAS_NAVIGATION_OPEN_CLASS);
        this.navigationElement.classList.remove(NAVIGATION_OPEN_CLASS);
        this.isOpen = false;
      } else {
        this.headerElement.classList.add(HEADER_HAS_NAVIGATION_OPEN_CLASS);
        this.navigationElement.classList.add(NAVIGATION_OPEN_CLASS);
        this.isOpen = true;
      }

    });

    this.initArrowPosition();
    this.navigationArrowElement.getBoundingClientRect();
    this.navigationArrowElement.classList.add(NAVIGATION_ARROW_ANIMATED_CLASS);

    [].forEach.call(this.navigationElement.querySelectorAll(`.${NAVIGATION_LIST_ITEM_CLASS}`), (item) => {
      this.initArrowHandler(item);
    });

    this.initArrowHandler(this.headerBrandElement);

    this.windowElement.addEventListener('resize', () => {
      this.initArrowPosition();
    });

    if (common.mediaMinWidth(this.windowElement, common.SCREEN_TABLET)) {
      this.headerClonedElement = this.headerElement.cloneNode(true);
      this.navigationClonedElement = this.headerClonedElement.querySelector('#navigation');
      this.headerClonedElement.classList.add(HEADER_STICKY_CLASS);
      this.headerClonedElement.classList.add(HEADER_INVERTED_CLASS);
      this.navigationClonedElement.classList.add(NAVIGATION_INVERTED_CLASS);
      this.headerElement.parentNode.insertBefore(this.headerClonedElement, this.headerElement.nextSibling);
    }

    this.windowElement.addEventListener('scroll', () => {
      if (common.mediaMinWidth(this.windowElement, common.SCREEN_TABLET) && this.headerClonedElement) {
        if (this.windowElement.pageYOffset > this.headerElement.clientHeight) {
          if (!this.headerClonedElement.classList.contains(HEADER_STICKY_VISIBLE_CLASS)) {
            this.headerClonedElement.classList.add(HEADER_STICKY_VISIBLE_CLASS);
          }

        } else if (this.headerClonedElement.classList.contains(HEADER_STICKY_VISIBLE_CLASS)) {
          this.headerClonedElement.classList.remove(HEADER_STICKY_VISIBLE_CLASS);
        }

      }

    });

  }

  initArrowHandler(element) {
    element.addEventListener('mouseenter', () => {
      this.setArrowPosition(element);
    });

    element.addEventListener('mouseleave', () => {
      this.initArrowPosition();
    });

  }

  initArrowPosition() {
    let navigationListItemActive = this.navigationElement.querySelector(`.${NAVIGATION_LIST_ITEM_ACTIVE_CLASS}`);

    if (navigationListItemActive) {
      this.setArrowPosition(navigationListItemActive);
    } else {
      this.setArrowPosition(this.headerBrandElement);
    }

  }

  setArrowPosition(element) {
    let elementPosition = element.getBoundingClientRect();
    let arrowPosition = elementPosition.left + elementPosition.width / 2;

    common.setVendorProperty(this.navigationArrowElement, 'transform', `translate3d(${arrowPosition}px, 0, 0)`);
  }
}
