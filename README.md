platform
==========

Platform detection and normalization.

### Getting Started

````
App.accessRule('maps://*', {
  launchExternal: true
});
````

```js
if (Platform.isAndroid) {
  // Android specific logic
}

if (Platform.isIos) {
  // iOS specific logic
}

Platform.phoneCall('+12223334444');

Platform.textMessage('+12223334444');

Platform.sendEmail('support@dispatch.me', 'Loving your packages');

Platform.openMap('170 Milk Street, Boston MA');
```
