const assert = require('assert');
const WIFI370 = require('./../index');
const path = require('path');
const fs = require('fs');
const packageJsonPath = path.join(__dirname, './../package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath));

describe('Test WIFI370', function () {

    describe('Timeout Test', function () {
        before(function () {
            this.wifi370 = new WIFI370("191.167.0.1", "1234");
        });

        it('getOn should return status', function (done) {
            this.wifi370.getOn((error, response) => {
                assert.equal(error, "timeout");
                assert.equal(response, false, "should false if device is not reachable");
                console.log("Response: " + response);
                done();
            });
        });
    });

    before(function () {
        this.wifi370 = new WIFI370(packageJson.ledController.host,5577);
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
        const red = this.wifi370.color.rgb(255, 0, 0);
        this.wifi370.setColor(red,(error, response) =>{
            assert.equal(error, null);
            assert.equal(response, false, "returns false by success");
            done();
        });
    });

    it('setColor switch to white', function (done) {
        const white = this.wifi370.color.rgb(255, 255, 255);
        this.wifi370.setColor(red,(error, response) =>{
            assert.equal(error, null);
            assert.equal(response, false, "returns false by success");
            done();
        });
    });

    it('getColor should return color', function (done) {
        this.wifi370.getColor((error, response) => {
            assert.equal(error, null);
            assert.equal(response.color.length, 3, "should be 3");
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