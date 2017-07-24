# wifi370-js-api
:bulb: lightweight JavaScript interface for WIFI370 LED-Controller

## Install 
[![npm version](https://badge.fury.io/js/wifi370-js-api.svg)](https://badge.fury.io/js/wifi370-js-api)

```
npm install wifi370-js-api
```

## Basic Usage
```javascript
const WIFI370 = require('wifi370-js-api');
const controller = WIFI370('LW12','20.1.0.142',5577);
controller.setOn();
controller.getOn((error, response) => {
});
controller.setOff();
controller.setColor(controller.color.rgb(255, 0, 0));
controller.getColor((error, response) => {
});
controller.setBrightness(controller.color.value());
controller.getBrightness((error, response) => {
});
controller.setHue(controller.color.hue());
controller.getHue((error, response) => {
});
controller.setSaturation(controller.color.saturationv());
controller.getSaturation((error, response) => {
});
```
## Tests
Find more examples in "test" directory.

Enter you hyperion server connection in package.json, and run some tests!
```
  "ledController": {
    "host": "20.1.0.142"
  }
```

run a single test from commandline with:
```
mocha test/wifi370.spec.js -g "setOff should switch off"
```

## Which hardware is used?

### Controller Support
|Controller  | Supported     | Type  |
| ---------- |:-------------:| -----:|
| LW12       | [x]           | RGB   |
| LD382      | [x]           | RGB   |
| LD382A     | [x]           | RGB   |
| LD686      | [x]           | RGBW  |

Thanks to Meik Dirkes for reverse engineering the communication for all controller types.

### WIFI370-LED Controller

![Screenshot](https://github.com/firsttris/wifi370-js-api/blob/master/wiki/wifi370img.PNG)

Link to Amazon (Germany): [Link](https://www.amazon.de/dp/B00Q6FKPZI/ref=cm_sw_r_tw_dp_x_HavByb4T01Q88)

## Donate
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=KEAR9ZC228YCL)

## License
See the [LICENSE](LICENSE.md) file for license rights and limitations (MIT).
