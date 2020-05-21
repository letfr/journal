const webpack = require('webpack');

module.exports = {
  lintOnSave: false,
  devServer: {
    port: 8080,
  },
  configureWebpack: {
    devServer: {
      watchOptions: {
        ignored: [/css/, /node_modules/],
      },
    },
    plugins: [
      new webpack.EnvironmentPlugin([
        'NODE_ENV',
        'firebaseApiKey',
        'firebaseAuthDomain',
        'firebaseDatabaseUrl',
        'firebaseProjectId',
        'firebaseStorageBucket',
        'firebaseMessagingSenderId',
        'firebaseAppId',
        'appPassword',
      ]),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        'process.env.firebaseApiKey': JSON.stringify(process.env.firebaseApiKey),
        'process.env.firebaseAuthDomain': JSON.stringify(process.env.firebaseAuthDomain),
        'process.env.firebaseDatabaseUrl': JSON.stringify(process.env.firebaseDatabaseUrl),
        'process.env.firebaseProjectId': JSON.stringify(process.env.firebaseProjectId),
        'process.env.firebaseStorageBucket': JSON.stringify(process.env.firebaseStorageBucket),
        'process.env.firebaseMessagingSenderId': JSON.stringify(process.env.firebaseMessagingSenderId),
        'process.env.firebaseAppId': JSON.stringify(process.env.firebaseAppId),
        'process.env.appPassword': JSON.stringify(process.env.appPassword),
      }),
    ],
  },
};
