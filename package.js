Package.describe({
  name: 'dispatch:platform',
  summary: 'Platform detection and normalization.',
  version: '1.0.1',
  git: 'https://github.com/DispatchMe/meteor-platform.git'
});

Cordova.depends({
  'com.cordova.plugins.sms': 'https://github.com' +
  '/DispatchMe/cordova-sms-plugin' +
  '/tarball/f19357dd17135af686dbf9fb782ee7fe01b86a2d',

  'de.appplant.cordova.plugin.email-composer': 'https://github.com' +
  '/DispatchMe/cordova-plugin-email-composer' +
  '/tarball/e0466a2bedf6798228ce5e46db21481e665641e1',

  // This prevents the annoying Undo Edit popup on iOS.
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
