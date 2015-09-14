Package.describe({
  name: 'dispatch:platform',
  summary: 'Platform detection and normalization.',
  version: '2.0.0',
  git: 'https://github.com/DispatchMe/meteor-platform.git'
});

Cordova.depends({
  'com.cordova.plugins.sms': 'hhttps://github.com/cordova-sms/cordova-sms-plugin.git#17c4da078f6c0d9f762ac10f5015440ee1c81d07',

  'de.appplant.cordova.plugin.email-composer': 'https://github.com/katzer/cordova-plugin-email-composer.git#db9c3aa9a7923c427bb85fea82f4e95f445a28f3',

  // This prevents the annoying Undo Edit popup on iOS.
  'fr.spirotron.cordova.ios.disableshaketoedit': 'https://github.com/DispatchMe/cordova-plugin-ios-disableshaketoedit.git#685f971fd0328fd167ea443f5638cd85e3fc035f'
});

Package.onUse(function (api) {
  api.versionsFrom('1.2');

  api.use('jquery', 'web');

  api.addFiles(['platform.js', 'normalize.js'], 'web');

  api.export('Platform', 'web');
});
