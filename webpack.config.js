
module.exports = {
    entry: "./src/app.js",
    output: {
        //Note that path have to be the absolute path. if unknown, console.log(__dirname); and run node webpack.config.js in the terminal. 
        path: "/Users/lindaperica/Documents/React-projects/indecision-app/public",
        filename: "bundle.js"
    },
    module: {
        rules: [{
            loader: "babel-loader",
            test: /\.js$/,
            exclude: /node_modules/
        }]
    },
    devtool: "eval-cheap-module-source-map",
    devServer: {
        contentBase: "/Users/lindaperica/Documents/React-projects/indecision-app/public"
    }
};