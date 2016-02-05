/*
 *  distance.js
 *
 *  David Janes
 *  IOTDB.org
 *  2016-02-04
 *
 *  Copyright [2013-2016] [David P. Janes]
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

"use strict";

var conversions = [
    {
        from: 'iot-unit:length.imperial.feet',
        to: 'iot-unit:length.imperial.inch',
        multiply: 12,
    },
    {
        from: 'iot-unit:length.imperial.yard',
        to: 'iot-unit:length.imperial.feet',
        multiply: 3,
    },
    {
        from: 'iot-unit:length.imperial.mile',
        to: 'iot-unit:length.imperial.feet',
        multiply: 5280,
    },
    {
        from: 'iot-unit:length.us.mile',
        to: 'iot-unit:length.imperial.mile',
        multiply: 0.999998,
    },
    {
        from: 'iot-unit:length.imperial.nautical-mile',
        to: 'iot-unit:length.si.meter',
        multiply: 1852,
    },
    {
        from: 'iot-unit:length.si.meter',
        to: 'iot-unit:length.imperial.inch',
        multiply: 39.3701,
    },
];

/**
 *  API
 */
exports.conversions = conversions;
