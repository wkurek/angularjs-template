const { src, dest } = require("gulp");
const plugins = require("gulp-load-plugins")();

const { paths } = require("./config");

function buildVendorScriptsDev() {
  return src(paths.bowerJson)
    .pipe(plugins.mainBowerFiles())
    .pipe(dest(paths.tmp + "/bower_components"));
}

function buildVendorScriptsProd() {
  return src(paths.bowerJson)
    .pipe(plugins.mainBowerFiles())
    .pipe(plugins.concat("vendors.min.js"))
    .pipe(plugins.uglify())
    .pipe(dest(paths.dist));
}

exports.buildVendorScriptsDev = buildVendorScriptsDev;
exports.buildVendorScriptsProd = buildVendorScriptsProd;
