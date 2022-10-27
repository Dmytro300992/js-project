let obj = {
        color: 'red',
        fontSize: 2
    };

    let bulb = {
        producer: 'Philips',
        lightness: 200,
        power: '200w',
        cap: 'small',
        on: function() {
            return 'The light on!'
        }
    }

    console.log(bulb.cap);
    console.log(bulb.on());