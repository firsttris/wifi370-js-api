#wifi370-js-api
small JavaScript interface for WIFI370 LED-Controller

[![npm version](https://badge.fury.io/js/wifi370-js-api.svg)](https://badge.fury.io/js/wifi370-js-api)
[![Dependency Status](https://david-dm.org/firsttris/wifi370-js-api.svg)](https://david-dm.org/firsttris/wifi370-js-api) 
```
npm install wifi370-js-api
```
###Basic Usage
```
const wifi370 = require('wifi370-js-api')("20.1.0.142",5577);
wifi370.setOn();
wifi370.setColor(wifi370.color.rgb(255, 0, 0));
wifi370.setOff();
```
find more examples in /test directory

### Which hardware is used?

![Screenshot](https://dl.dropboxusercontent.com/u/13344648/dev/wifi370img.PNG)

Link to Amazon (Germany): [Link](https://www.amazon.de/dp/B00Q6FKPZI/ref=cm_sw_r_tw_dp_x_HavByb4T01Q88)