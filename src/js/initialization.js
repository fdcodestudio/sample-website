const sidenav = document.querySelectorAll('.sidenav');
M.Sidenav.init(sidenav);

const scrollspy = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scrollspy, { scrollOffset: 56 });

const slider = document.querySelectorAll('.slider');
M.Slider.init(slider, {
  indicators: false,
  duration: 750,
  height: 450
});

const collapsible = document.querySelectorAll('.collapsible');
M.Collapsible.init(collapsible);

const modal = document.querySelectorAll('.modal');
M.Modal.init(modal, { endingTop: '15%' });