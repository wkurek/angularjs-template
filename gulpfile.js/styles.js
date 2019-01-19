const { src, dest } = require("gulp");
const plugins = require("gulp-load-plugins")();

const { paths } = require("./config");

function renameMinifiedFile() {
  return plugins.rename(function(path) {
    path.basename += ".min";
  });
}

function buildStylesDev() {
  return src(paths.styles)
    .pipe(plugins.less())
    .pipe(dest(paths.tmp));
}

function buildStylesProd() {
  return src(paths.styles)
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.less())
    .pipe(plugins.cleanCss())
    .pipe(plugins.sourcemaps.write())
    .pipe(renameMinifiedFile())
    .pipe(dest(paths.dist));
}

exports.buildStylesDev = buildStylesDev;
exports.buildStylesProd = buildStylesProd;
