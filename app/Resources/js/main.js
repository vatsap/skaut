import Navigation from './navigation';
import ScrollSpy from './scroll-spy';

new Navigation(
  document.getElementById('navigation'),
  document.getElementById('navigation-toggle'),
  document.getElementById('navigation-arrow'),
  document.getElementById('header'),
  document.getElementById('header-brand'),
  window
);

new ScrollSpy(
  window
);
