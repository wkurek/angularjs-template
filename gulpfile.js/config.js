const paths = {
  scripts: "./app/**/*.js",
  styles: ["./app/**/*.css", "./app/**/*.less"],
  index: "./app/index.html",
  partials: ["./app/**/*.html", "!./app/index.html"],
  bowerJson: "./bower.json",
  tmp: "./tmp",
  dist: "./dist"
};

exports.paths = paths;
