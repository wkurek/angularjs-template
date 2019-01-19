const { series } = require("gulp");
const { buildDev, buildProd } = require("./build");
const { cleanDev, cleanProd } = require("./clean");

exports.buildProd = series(cleanProd, buildProd);
exports.buildDev = series(cleanDev, buildDev);
