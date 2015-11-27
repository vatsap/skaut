'use strict';

export const SCREEN_PHONE = 480;
export const SCREEN_TABLET = 768;
export const SCREEN_DESKTOP = 1024;
export const SCREEN_LARGE = 1400;

export function mediaMinWidth(windowElement, screenWidth) {
  return windowElement.matchMedia(`(min-width: ${screenWidth}px)`);
}
