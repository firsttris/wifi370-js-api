#wifi370-js-api
:bulb: lightweight JavaScript interface for WIFI370 LED-Controller

[![npm version](https://badge.fury.io/js/wifi370-js-api.svg)](https://badge.fury.io/js/wifi370-js-api)
[![Dependency Status](https://david-dm.org/firsttris/wifi370-js-api.svg)](https://david-dm.org/firsttris/wifi370-js-api) 
```
npm install wifi370-js-api
```
###Basic Usage
```
const wifi370 = new (require('wifi370-js-api'))("20.1.0.142",5577);
wifi370.setOn();
wifi370.getOn((error, response) => {
});
wifi370.setOff();
wifi370.setColor(wifi370.color.rgb(255, 0, 0));
wifi370.getColor((error, response) => {
});
wifi370.setBrightness(this.selectedColor.value());
wifi370.getBrightness((error, response) => {
});
wifi370.setHue(this.selectedColor.hue());
wifi370.getHue((error, response) => {
});
wifi370.setSaturation(this.selectedColor.saturationv());
wifi370.getSaturation((error, response) => {
});
```
###Tests
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

### Which hardware is used?

![Screenshot](https://dl.dropboxusercontent.com/u/13344648/dev/wifi370img.PNG)

Link to Amazon (Germany): [Link](https://www.amazon.de/dp/B00Q6FKPZI/ref=cm_sw_r_tw_dp_x_HavByb4T01Q88)