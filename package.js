Package.describe({
  name: 'dispatch:platform',
  summary: 'Platform detection and normalization.',
  version: '2.0.0',
  git: 'https://github.com/DispatchMe/meteor-platform.git'
});

Cordova.depends({
  'cordova-sms-plugin': '0.1.9',
  'cordova-plugin-email-composer': '0.8.3',

  // This prevents the annoying Undo Edit popup on iOS.
  'cordova-plugin-ios-disableshaketoedit': '1.0.0'
});

Package.onUse(function (api) {
  api.versionsFrom('1.3');

  api.use([
    'ecmascript',
    'jquery'
  ], 'web');

  api.addFiles([
    'platform.js',
    'normalize.js'
  ], 'web');

  api.export('Platform', 'web');
});
