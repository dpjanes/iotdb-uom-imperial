var iotdb = require('iotdb');
var _ = iotdb._;

// this will load extensions
iotdb.modules();

var nms = _.convert.convert({
    from: 'iot-unit:length.si.meter',
    to: 'iot-unit:length.imperial.nautical-mile',
    value: 1000,
});
console.log(nms);
