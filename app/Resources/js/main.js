import Navigation from './navigation';
import ScrollSpy from './scroll-spy';

new Navigation(
  document.getElementById('header'),
  document.body,
  window
);

new ScrollSpy(
  window
);
