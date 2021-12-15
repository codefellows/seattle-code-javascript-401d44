# Class 41 - React Native 

## Overview

We have a new runtime environment!
  * Android - java
  * iOS - objective c
  * Our javascript will compile to and executable.

We are taking the same syntax of JSX and making those features run on native hardware. Considering React as language for User Interfaces.  We lose all the elements / global browser objects / global modules / node modules / events.

## Development

All modern computers have a browser, our react native code is meant to run somewhere else:

* Xcode for mac users.
* Visual Studio for android users.
  * * emulate the hardware for development
* Expo will handle most of the interfacing with our dev tools. 
  * We can run `npm start` which starts expo.

To run on your phones you need to install `expo-go`
* an application that allows expo to tunnel the bundle to your phone over your LAN / host.
* Proxy application for running prototypes.

Installing things changes slightly:

  * We need expo to install things now.
  * Most npm modules still work, but those that require node / browser specific stuff will not.
    * Form Component modules probably won't, but some might.
  * to install we just run: `expo install package-name`

## Features

Our phones can do a lot of stuff, our js will interface natively with phone hardware features:
  * We can talk to the camera / accelerometer / geolocation / contacts / instant messenger
    * We now also have to think about permissions.
    * Each module that requires permission, will ask seperately.
  * We'll install a module for accessing each feature.

For features that rely on a standardixzed protocol:
  * email `mailto`
  * phone `tel`
  * text message `sms`
  * websites `http`
    * Define a `Linking` component to use a protocol

## Deployment

2 options:

1) is use the expo "maretplace" platform to publish proxy apps.
  * Make sure to create an account on expo.dev
    * signin to that account on you expo-cli.
  * Expo hosts a deployed app image, and you go through expo-go.
  * use `expo publish` to make a build and deploy.
  * Add you app name and a version number to your app.json file

2) Create a Hardware specific build using expo and download it to your machine.
  * `expo build`
  * Ready to add to the android / apple store.
  * add to `app.json`:

```
  "ios": {
    "bundleIdentifier": "com.yourcompany.yourappname",
    "buildNumber": "1.0.0"
  },
  "android": {
    "package": "com.yourcompany.yourappname",
    "versionCode": 1
  }
```

  * iOS: Your builds will need some authentication info
    * apple devloper account

## Lab Prep
