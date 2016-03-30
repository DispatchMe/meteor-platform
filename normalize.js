if (Platform.isIos) {
  Meteor.startup(() => {
    // Prevent fixed positions from moving or resizing on iOS7 whenever an input is blurred.
    // http://stackoverflow.com/a/24670746/230462
    $(document).on('blur', 'input, textarea', () => {
      setTimeout(() => {
        window.scrollTo(document.body.scrollLeft, document.body.scrollTop);
      }, 0);
    });

    // Adds touchstart listener to <body>.
    // Required for :active pseudo class to work in iOS.
    // https://developers.google.com/web/fundamentals/input/touch/activestates/index?hl=en
    document.body.addEventListener('touchstart', () => {}, false);
  });
}
