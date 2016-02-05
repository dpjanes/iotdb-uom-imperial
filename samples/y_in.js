var iotdb = require('iotdb');
var _ = iotdb._;

// this will load extensions
iotdb.modules();

var inches = _.convert.convert({
    from: 'iot-unit:length.imperial.yard',
    to: 'iot-unit:length.imperial.inch',
    value: 1
});
console.log(inches);
