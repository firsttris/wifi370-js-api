"use strict";
const WIFI370 = require('./WIFI370');

class LW12 extends WIFI370 {
  constructor (host, port) {
    super(host, port);
    this.CMD = {
      INFO: ["239", "1", "119"],
      ON: ["204", "35", "51"],
      OFF: ["204", "36", "51"]
    }
  }

  setColor (color, callback) {
    this.selectedColor = color;
    let rgbArray = color.rgb().round().array();
    rgbArray.unshift(86);
    rgbArray.push(170);
    this.send(rgbArray, false, callback);
  }
}

module.exports = LW12;