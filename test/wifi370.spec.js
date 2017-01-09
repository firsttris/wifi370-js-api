const assert = require('assert');
const WIFI370 = require('./../index');

describe('Test WIFI370', function () {

    before(function () {
        this.wifi370 = new WIFI370("20.1.0.142",5577);
    });

    it('setOn should switch on', function (done) {
        this.wifi370.setOn((error, response) =>{
            assert.equal(error, null);
            assert.equal(response, false, "returns false by success");
            done();
        });
    });

    it('setOff should switch off', function (done) {
        this.wifi370.setOff((error, response) =>{
            assert.equal(error, null);
            assert.equal(response, false, "returns false by success");
            done();
        });
    });

    it('getOn should return status', function (done) {
        this.wifi370.getOn((error, response) =>{
            assert.equal(error, null);
            assert.equal(response, false, "should return the current power status");
            console.log("Response: "+response);
            done();
        });
    });

    it('setColor switch to red', function (done) {
        const RedRGBArray = this.wifi370.color.rgb(255, 0, 0).round().array();
        this.wifi370.setColor(RedRGBArray,(error, response) =>{
            assert.equal(error, null);
            assert.equal(response, false, "returns false by success");
            done();
        });
    });

    it('setColor switch to white', function (done) {
        const red = this.wifi370.color.rgb(255, 255, 255).round().array();
        this.wifi370.setColor(red,(error, response) =>{
            assert.equal(error, null);
            assert.equal(response, false, "returns false by success");
            done();
        });
    });

    it('setBrightness should set brightness', function (done) {
        const red = this.wifi370.color.rgb(255, 255, 255);
        this.wifi370.setBrightness(red.value(), (error, response) =>{
            assert.equal(error, null);
            assert.equal(response, false, "returns false by success");
            done();
        });
    });

    it('getBrightness should get brightness', function (done) {
        this.wifi370.getBrightness((error, response) =>{
            assert.equal(error, null);
            assert.equal(response, 100, "should return the current brightness");
            console.log("Response: "+response);
            done();
        });
    });

    it('setHue should set hue', function (done) {
        const red = this.wifi370.color.rgb(255, 255, 255);
        this.wifi370.setHue(red.hue(), (error, response) =>{
            assert.equal(error, null);
            assert.equal(response, false, "returns false by success");
            done();
        });
    });

    it('getHue should get hue', function (done) {
        this.wifi370.getHue((error, response) =>{
            assert.equal(error, null);
            assert.equal(response, 0, "should return the current hue");
            console.log("Response: "+response);
            done();
        });
    });

    it('setSaturation should set saturation', function (done) {
        const red = this.wifi370.color.rgb(255, 255, 255);
        this.wifi370.setSaturation(red.saturationv(), (error, response) =>{
            assert.equal(error, null);
            assert.equal(response, false, "returns false by success");
            done();
        });
    });

    it('getSaturation should get saturation', function (done) {
        this.wifi370.getSaturation((error, response) =>{
            assert.equal(error, null);
            assert.equal(response, 0, "should return the current saturation");
            console.log("Response: "+response);
            done();
        });
    });

});