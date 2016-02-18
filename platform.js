Platform = {};

/**
 * Boolean values for platform detection.
 */
Platform.isAndroid = /android/g.test(navigator.userAgent.toLowerCase());
Platform.isIos = /(ipad|iphone|ipod)/g.test(navigator.userAgent.toLowerCase());

Platform.isMobile = Platform.isAndroid || Platform.isIos;
Platform.isNotMobile = !Platform.isAndroid && !Platform.isIos;

/**
 * Get the version of the user's mobile device.
 * @return version This is false if the device is not mobile.
 */
Platform.mobileVersion = function () {
  var userAgent = navigator.userAgent;

  // Determine version based on device
  if (userAgent.indexOf('iPhone') > -1) {
    return userAgent.substr(userAgent.indexOf('iPhone OS') + 10, 3).replace( '_', '.' );
  }

  if (userAgent.indexOf('iPad') > -1) {
    return userAgent.substr(userAgent.indexOf('CPU OS') + 7, 3).replace( '_', '.' );
  }

  if (userAgent.indexOf('Android') > -1) {
    return userAgent.substr(userAgent.indexOf('Android') + 8, 3);
  }

  // Return false if the device is not a mobile device
  return false;
};


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
    console.log(rwindow.$width() < 768)
    if (rwindow.$width() < 768) window.open(url, '_system');
    else window.open(url, '_blank');
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
