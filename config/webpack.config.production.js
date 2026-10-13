process.env.NODE_ENV = "production"; // Babel 8 adds dev-only JSX helpers unless this is set

const config = require("./webpack.config.js");

config.mode = "production";
module.exports = config;
