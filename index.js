const net = require('net');
const Color = require('color');

class WIFI370 {

    constructor (host, port) {
        this.host = host;
        this.port = port;
        this.color = Color;
        this.selectedColor = this.color.rgb(255, 255, 255);
        this.powerState = false;
        this.CMD = {
            INFO: ["239", "1", "119"],
            ON: ["204", "35", "51"],
            OFF: ["204", "36", "51"]
        }
    }

    send (array, waitForResponse, callback) {
        const client = new net.Socket();
        let error;
        let response = "";
        client.connect(this.port, this.host, () => {
            const buffer = new Buffer(array);
            client.write(buffer);
            if (!waitForResponse) {
                client.end();
            }
        });
        client.on('error', (err) => {
            if(callback) callback(err, null);
        });
        client.on('data', (data) => {
            response = data.toString('hex');
            client.end();
        });
        client.on('end', () => {
            if(callback) callback(null, response);
        });
    }

    extractColorFromResponse (response) {
        response = response.match(/.{1,2}/g);
        const r = response[6];
        const g = response[7];
        const b = response[8];
        this.selectedColor = this.color("#" + r + g + b);
    }

    extractPowerStateFromResponse (response) {
        response = response.match(/.{1,2}/g);
        this.powerState = response[2] == "23"
    }

    setOn (callback) {
        this.send(this.CMD.ON, false, callback);
    }

    setOff (callback) {
        this.send(this.CMD.OFF, false, callback);
    }

    getOn (callback) {
        this.send(this.CMD.INFO, true, (err, response) => {
            this.extractPowerStateFromResponse(response);
            callback(err, this.powerState);
        })
    }

    setColor (colorArray, callback) {
        colorArray.unshift(86);
        colorArray.push(170);
        this.send(colorArray, false, callback);
    }

    setBrightness (value, callback) {
        this.selectedColor = this.selectedColor.value(value);
        const rgbArray = this.selectedColor.rgb().round().array();
        this.setColor(rgbArray, callback);
    }

    getBrightness (callback) {
        this.send(this.CMD.INFO, true, (err, response) => {
            this.extractColorFromResponse(response);
            callback(err, this.selectedColor.value());
        })
    }

    setHue (value, callback) {
        this.selectedColor = this.selectedColor.hue(value);
        const rgbArray = this.selectedColor.rgb().round().array();
        this.setColor(rgbArray, callback);
    }

    getHue (callback) {
        this.send(this.CMD.INFO, true, (err, response) => {
            this.extractColorFromResponse(response);
            callback(err, Math.round(this.selectedColor.hue()));
        })
    }

    setSaturation (value, callback) {
        this.selectedColor = this.selectedColor.saturationv(value)
        const rgbArray = this.selectedColor.rgb().round().array();
        this.setColor(rgbArray, callback);
    }

    getSaturation (callback) {
        this.send(this.CMD.INFO, true, (err, response) => {
            this.extractColorFromResponse(response);
            callback(err, Math.round(this.selectedColor.saturationv()));
        })
    }
}

module.exports = WIFI370;