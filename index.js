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
        let response = "";
        client.setTimeout(1500);
        client.connect(this.port, this.host, () => {
            const buffer = new Buffer(array);
            client.write(buffer);
            if (!waitForResponse) {
                client.end();
            }
        });
        client.on('error', (err) => {
            if(callback) callback(err, response);
        });
        client.on('data', (data) => {
            response += data.toString('hex');
            client.end();
        });
        client.on('end', () => {
            if(callback) callback(null, response);
        });
        client.on('timeout', function() {
            client.destroy("timeout");
        });
    }

    extractColorFromResponse (response) {
        let responseArray = response.match(/.{1,2}/g);
        const r = responseArray[6];
        const g = responseArray[7];
        const b = responseArray[8];
        this.selectedColor = this.color("#" + r + g + b);
    }

    extractPowerStateFromResponse (response) {
        let responseArray = response.match(/.{1,2}/g);
        if(responseArray) this.powerState = responseArray[2] == "23"
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

    setColor (color, callback) {
        this.selectedColor = color;
        let rgbArray = color.rgb().round().array();
        rgbArray.unshift(86);
        rgbArray.push(170);
        this.send(rgbArray, false, callback);
    }

    getColor(callback) {
        callback(null, this.selectedColor);
    }

    setBrightness (value, callback) {
        this.selectedColor = this.selectedColor.value(value);
        this.setColor(this.selectedColor, callback);
    }

    getBrightness (callback) {
        this.send(this.CMD.INFO, true, (err, response) => {
            this.extractColorFromResponse(response);
            callback(err, this.selectedColor.value());
        })
    }

    setHue (value, callback) {
        this.selectedColor = this.selectedColor.hue(value);
        this.setColor(this.selectedColor, callback);
    }

    getHue (callback) {
        this.send(this.CMD.INFO, true, (err, response) => {
            this.extractColorFromResponse(response);
            callback(err, Math.round(this.selectedColor.hue()));
        })
    }

    setSaturation (value, callback) {
        this.selectedColor = this.selectedColor.saturationv(value);
        this.setColor(this.selectedColor, callback);
    }

    getSaturation (callback) {
        this.send(this.CMD.INFO, true, (err, response) => {
            this.extractColorFromResponse(response);
            callback(err, Math.round(this.selectedColor.saturationv()));
        })
    }
}

module.exports = WIFI370;