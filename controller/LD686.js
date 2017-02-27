"use strict";
const WIFI370 = require('./WIFI370');

class LD686 extends WIFI370 {
  constructor (host, port) {
    super(host, port);
    this.CMD = {
      INFO: ["129", "138", "139", "150"],
      ON: ["113", "35", "15", "163"],
      OFF: ["113", "36", "15", "164"]
    }
  }

  setColor (color, callback) {
    this.selectedColor = color;
    let rgbArray = color.rgb().round().array();
    rgbArray.push(0, 0, 0, 15);
    rgbArray.unshift(49);
    let cs = 0;
    for (let i in rgbArray) {
      cs += parseInt(rgbArray[i], 10);
    }
    rgbArray.push(cs);
    this.send(rgbArray, false, callback);
  }
}

module.exports = LD686;