const path = require("path")
const LiveReload = require("webpack-livereload-plugin")

module.exports = {
    mode: "development",
    devtool: "source-map",
    entry: path.resolve(__dirname, "client/app.ts"),
    output: {
        path: path.resolve(__dirname, "client/.dist"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".ts", ".js", ".css"]
    },
    module: {
        rules: [{
            test: /\.ts$/,
            loader: "ts-loader"
        }]
    },
    plugins: [
        new LiveReload({})
    ]
}