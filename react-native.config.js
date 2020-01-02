module.exports = {
  dependency: {
    platforms: {
      android: {
        packageInstance:
          "new RNNotificationsPackage(reactNativeHost.getApplication())"
      }
    }
  }
};
