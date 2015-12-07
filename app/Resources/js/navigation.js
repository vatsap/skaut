import * as common from './common';

const NAVIGATION_CLASS = 'navigation';
const NAVIGATION_OPEN_CLASS = 'navigation--open';
const NAVIGATION_VISIBLE_CLASS = 'navigation--visible';
const NAVIGATION_INVERTED_CLASS = 'navigation--inverted';
const NAVIGATION_TOGGLE_TOGGLED_CLASS = 'navigation__toggle--toggled';
const NAVIGATION_TOOGLE_BAR_DELAY = '.2s';
const NAVIGATION_TOGGLE_BAR_FIRST_CLASS = 'navigation__toggle__bar--first';
const NAVIGATION_TOGGLE_BAR_THIRD_CLASS = 'navigation__toggle__bar--third';
const NAVIGATION_LIST_ITEM_CLASS = 'navigation__list__item';
const NAVIGATION_LIST_ITEM_ACTIVE_CLASS = 'navigation__list__item--active';
const NAVIGATION_ARROW_ANIMATED_CLASS = 'navigation__arrow--animated';
const HEADER_STICKY_CLASS = 'header--sticky';
const HEADER_STICKY_VISIBLE_CLASS = 'header--sticky--visible';
const HEADER_BRAND_CLASS = 'header__brand';
const HEADER_BRAND_INVERTED_CLASS = 'header__brand--inverted';

export default class {
  constructor(navigationElement, navigationToggleElement, navigationArrowElement, headerElement, headerBrandElement, windowElement) {
    this.navigationElement = navigationElement;
    this.navigationToggleElement = navigationToggleElement;
    this.navigationArrowElement = navigationArrowElement;
    this.headerElement = headerElement;
    this.headerBrandElement = headerBrandElement;
    this.windowElement = windowElement;
    this.headerClonedElement = null;
    this.isOpen = false;

    this.init();
  }

  init() {
    this.navigationToggleElement.addEventListener('click', () => {
      let navigationToggleBarFirst = this.navigationToggleElement.querySelector(`.${NAVIGATION_TOGGLE_BAR_FIRST_CLASS}`);
      let navigationToggleBarThird = this.navigationToggleElement.querySelector(`.${NAVIGATION_TOGGLE_BAR_THIRD_CLASS}`);
      if (this.isOpen) {
        common.setVendorProperty(navigationToggleBarFirst, 'transitionDelay', NAVIGATION_TOOGLE_BAR_DELAY);
        common.setVendorProperty(navigationToggleBarThird, 'transitionDelay', NAVIGATION_TOOGLE_BAR_DELAY);
        this.navigationElement.classList.remove(NAVIGATION_OPEN_CLASS);
        this.navigationToggleElement.classList.remove(NAVIGATION_TOGGLE_TOGGLED_CLASS);
        this.isOpen = false;
      } else {
        common.setVendorProperty(navigationToggleBarFirst, 'transitionDelay', '0s');
        common.setVendorProperty(navigationToggleBarThird, 'transitionDelay', '0s');
        this.navigationElement.classList.add(NAVIGATION_OPEN_CLASS);
        this.navigationElement.classList.add(NAVIGATION_VISIBLE_CLASS);
        this.navigationToggleElement.classList.add(NAVIGATION_TOGGLE_TOGGLED_CLASS);
        this.isOpen = true;
      }
    });

    let transitionEnd = () => {
      if (!this.isOpen) {
        this.navigationElement.classList.remove(NAVIGATION_VISIBLE_CLASS);
      }
    };

    this.navigationElement.addEventListener('transitionend', transitionEnd);
    this.navigationElement.addEventListener('webkitTransitionEnd', transitionEnd);

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

    this.headerClonedElement = this.headerElement.cloneNode(true);
    this.headerClonedElement.removeAttribute('id');
    this.headerClonedElement.removeAttribute('role');
    this.headerClonedElement.querySelector(`.${NAVIGATION_CLASS}`).classList.add(NAVIGATION_INVERTED_CLASS);
    this.headerClonedElement.querySelector(`.${HEADER_BRAND_CLASS}`).classList.add(HEADER_BRAND_INVERTED_CLASS);
    this.headerClonedElement.classList.add(HEADER_STICKY_CLASS);
    this.headerElement.parentNode.insertBefore(this.headerClonedElement, this.headerElement.nextSibling);

    this.windowElement.addEventListener('scroll', () => {
      if (common.mediaMinWidth(this.windowElement, common.SCREEN_TABLET)) {
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
