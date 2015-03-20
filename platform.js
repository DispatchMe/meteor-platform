Platform = {};

/**
 * Boolean values for platform detection.
 */
Platform.isAndroid = /android/g.test(navigator.userAgent.toLowerCase());
Platform.isIos = /(ipad|iphone|ipod)/g.test(navigator.userAgent.toLowerCase());

Platform.isMobile = Platform.isAndroid || Platform.isIos;

/**
 * Create a map url that is appropriate for the current device.
 * @param address Ex. 1143 Lexington Ave, Indianapolis IN, 46203
 */
Platform.openMap = function (address) {
  address = encodeURI(address);

  var url;

  if (Platform.isIos) {
    url = 'maps://maps.apple.com/?q=' + address;
    window.open(url, '_system');
  } else if (Platform.isAndroid) {
    url = 'geo://0,0?q=' + address;
    navigator.app.loadUrl(url, {openExternal: true});
  } else {
    url = 'http://maps.google.com/?dirflg=d&q=' + address;
    window.open(url, '_system');
  }
};

/**
 * Start a phone call
 * @param number
 */
Platform.phoneCall = function (number) {
  var url = 'tel:' + number;
  if (Platform.isAndroid) {
    navigator.app.loadUrl(url, {openExternal: true});
  } else {
    window.open(url, '_system');
  }
};

/**
 * Send an email
 * @param {String} address
 * @param {String} subject
 */
Platform.sendEmail = function (address, subject) {
  if (Meteor.isCordova) {
    cordova.plugins.email.isAvailable(function (isAvailable) {
      if (isAvailable) {
        cordova.plugins.email.open({
          to: [address],
          subject: subject
        });
      } else {
        window.location.href = 'mailto:' + address + '?subject=' + subject;
      }
    });
    return;
  }

  window.location.href = 'mailto:' + address + '?subject=' + subject;
};

/**
 * Open a text message
 * @param number
 */
Platform.textMessage = function (number) {
  if (Meteor.isCordova && Platform.isIos) return sms.send(number, '', {});

  var url = 'sms:' + number;
  if (Platform.isAndroid) {
    navigator.app.loadUrl(url, {openExternal: true});
  } else {
    window.open(url, '_system');
  }
};
