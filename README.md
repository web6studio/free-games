# Free-To-Play Games React Native application

This application is developed for Android and has not been tested on iOS. You can run it using the Android Studio Emulator or on a real phone (with cable, Expo or by downloading a build).

## Setting up

### Clone repo:

`git clone git@github.com:web6studio/free-games.git`
`cd free-games`

### Install dependencies:

`yarn` or npm `npm i`

### Install **nodejs-lts** and **microsoft-openjdk11** (you can use [choco](https://chocolatey.org/)):

`choco install -y nodejs-lts microsoft-openjdk11`

### Download and install [Android Studio](https://developer.android.com/studio/index.html).

Make sure the boxes next to all of the following items are checked:

- Android SDK
- Android SDK Platform
- Android Virtual Device

### Create and setup Android Virtual Device

Detailed information about installing and running the application can be found [here](https://reactnative.dev/docs/environment-setup).

### Finally you can run the application!

`yarn start` or `npx react-native start`

# Extra problem

Script for solving an additional task is in the file: **extra-problem.js**. The main function is called **groupByGameId**.

# What can be improved

1. Error handling
2. iOS support
3. Tests
4. Styling/Refactoring
5. I didn't add any debounce/throttling to limit requests to 4 per second. I suppose the interface will not allow to make such a number of requests in real life. But if necessary, adding such restrictions is not difficult.
