"use strict";
const LW12 = require('./controller/LW12');
const LD382A = require('./controller/LD382A');
const LD686 = require('./controller/LD686');

let getContr = (controllerName, host, port) => {
  let controller;
  if(controllerName === 'LW12' || controllerName === '') {
    controller = new LW12(host, port)
  }
  if(controllerName === 'LD382A' || controllerName === 'LD382') {
    controller = new LD382A(host, port)
  }
  if(controllerName === 'LD686') {
    controller = new LD686(host, port)
  }
  if(controller === undefined) {
    console.error("Controller " + controllerName + "could not be initialized");
  }
  return controller
};

module.exports = getContr;






