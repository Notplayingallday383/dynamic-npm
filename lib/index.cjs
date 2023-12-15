'use strict';

const { resolve } = require('node:path');

const dynPath = resolve(__dirname, '..', 'dist');

exports.dynPath = dynPath;