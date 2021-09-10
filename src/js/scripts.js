$('.nav-link').each(function() {
  if (window.location.href === this.href) {
    $(this).addClass('active');
  }
});

(function() {
  const maxHeight = Math.max.apply(null, $('#portfolio .card').map(function() {
    return $(this).height()
  }));
  
  $('#portfolio .card').each(function() {
    $(this).css('margin-bottom', maxHeight - $(this).outerHeight() + 16);
  });
});