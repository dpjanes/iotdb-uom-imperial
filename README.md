# homestar-uom-imperial

Add Imperial Unit of Measure Conversions to IOTDB.

<img src="https://raw.githubusercontent.com/dpjanes/iotdb-homestar/master/docs/HomeStar.png" align="right" />

# Installation

[Install Home☆Star first](https://homestar.io/about/install).

Then:

    $ homestar install iotdb-uom-imperial

# Usage

Here's a an example of converting meters to nautical miles.

    var iotdb = require('iotdb');
    var _ = iotdb._;
    iotdb.modules(); // this will load extensions

    var nms = _.convert.convert({
        from: 'iot-unit:length.si.meter',
        to: 'iot-unit:length.imperial.nautical-mile',
        value: 1000,
    });
    console.log(nms);

And yards to inches

    var inches = _.convert.convert({
        from: 'iot-unit:length.imperial.yard',
        to: 'iot-unit:length.imperial.inch',
        value: 1
    });
    console.log(inches);

KM to inches

    var inches = _.convert.convert({
        from: 'iot-unit:length.si.meter.3', // m * 10^3 = km
        to: 'iot-unit:length.imperial.inch',
        value: 1
    });
    console.log(inches);

# Vocabulary

You can see the imperial vocabulary [here](https://iotdb.org/pub/iot-unit.html).
Not all things have conversions written yet - if we're missing anything
just let us know (or fork and add it yourself)
