Package.describe({
  name: 'dispatch:platform',
  summary: 'Platform detection and normalization.',
  version: '1.0.0',
  git: 'https://github.com/DispatchMe/meteor-platform.git'
});

Cordova.depends({
  'de.appplant.cordova.plugin.email-composer': 'https://github.com' +
  '/katzer/cordova-plugin-email-composer' +
  '/tarball/45b4101dc1fc05b7bcf1af6caee5e51de3855ad7',

  // This prevents the annoying Undo Edit popup
  'fr.spirotron.cordova.ios.disableshaketoedit': 'https://github.com' +
  '/nleclerc/cordova-plugin-ios-disableshaketoedit' +
  '/tarball/685f971fd0328fd167ea443f5638cd85e3fc035f'
});

Package.onUse(function (api) {
  api.versionsFrom('1.0');
  api.use('jquery', 'web');

  api.addFiles(['platform.js', 'normalize.js'], 'web');

  api.export('Platform', 'web');
});
