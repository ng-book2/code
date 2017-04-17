# NativeScript Photos Near Me

This is a demo application for Android and iOS developed with NativeScript, Angular 2, and TypeScript.  It was designed to demonstrate device geolocation, usage of maps, and consuming remote API data from the Flickr API.

## Configuration and Installation

Not much is required to get this project up and running on your Android or iOS simulator.  You will need an API key for [Flickr](https://www.flickr.com) and [Mapbox](https://www.mapbox.com).

Clone or download the repository:

```
git clone https://github.com/burkeholland/nativescript-photos-near-me
```

Open the project's **app/config.ts** file and include your API keys where appropriate.

From the Command Prompt (Windows) or Terminal (Mac and Linux), execute the following to download all the project dependencies listed in the project's **package.json** file:

```
tns install
```

With the dependencies installed, run the application on any device or simulator.

### iOS 9+ and Android 6+ Notes

To use geolocation in the later versions of Android and iOS, permission is required on the host device.  Upon running the application, a request for permission will be triggered.  If denied, the only way to provide permission is to either re-install the application or go to the device settings.

## Resources

NativeScript - [https://www.nativescript.org](https://www.nativescript.org)

Angular 2 - [https://angular.io](https://angular.io)

Flickr - [https://www.flickr.com](https://www.flickr.com)

The Polyglot Developer - [https://www.thepolyglotdeveloper.com](https://www.thepolyglotdeveloper.com)