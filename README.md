# thesis-supervisor-ui

## Development Setup

For the development setup is used the `expo-cli`. In order to use it you have to install it globally on your computer.

```bash
yarn global add expo-cli

# or

npm i -g expo-cli
```

The tool can compile the code of the native app for iOS, Android and in a web browser.

```bash
npm start
#or
yarn start
```

### iOS

Before starting the app make sure `xCode` is installed on your MacBook.
To enable the simulation mode run from the command line:

```bash
sudo xcode-select -s /Applications/Xcode.app
```

After that load `http://localhost:19002/` in your browser and click `Run on iOS simulator`. After that the xCode simulator should start up and after an initial load time it should show the app.

**HINT:** To reduce the loading time of the simulator, close xCode as less as possible.

### Android

Before starting the app make sure `Android Studio` is installed properly and there is create a device in the `Android Virtual Device Manager`.

1. Open Android Studio
2. Navigate `Tools` -> `AVD Manager`
3. Double Click the desired device
4. Navigate to `http://localhost:19002/`
5. Click `Run Android device/emulator`
