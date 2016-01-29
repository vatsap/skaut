import Navigation from './navigation';
import ScrollSpy from './scroll-spy';

new Navigation(
  document.getElementById('header'),
  window
);

new ScrollSpy(
  window
);
