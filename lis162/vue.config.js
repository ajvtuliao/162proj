module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: 'pug-plain-loader',
      }
    ]
  }
}