'use strict';

export const SCREEN_PHONE = 480;
export const SCREEN_TABLET = 768;
export const SCREEN_DESKTOP = 1024;
export const SCREEN_LARGE = 1400;

export function mediaMinWidth(windowElement, screenWidth) {
  return windowElement.matchMedia(`(min-width: ${screenWidth}px)`).matches;
}

export function setVendorProperty(element, property, value) {
  let camelCased = `${property[0].toUpperCase()}property.substring(1)`;

  element.style[property] = value;
  element.style[`webkit${camelCased}`] = value;
  element.style[`o${camelCased}`] = value;
  element.style[`ms${camelCased}`] = value;
}
