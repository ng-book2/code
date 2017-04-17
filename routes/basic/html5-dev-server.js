var WebpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");

var config = require("./webpack.config.js");
// config.entry.app.unshift("webpack-dev-server/client?http://localhost:8080");
var compiler = webpack(config);

var server = new WebpackDevServer(compiler, {
  // Set this as true if you want to access dev server from arbitrary url.
  // This is handy if you are using a html5 router.
  historyApiFallback: true,
  stats: { colors: true },
});
server.listen(8080, "localhost", function() {});

