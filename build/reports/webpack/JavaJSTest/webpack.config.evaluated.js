{
  mode: 'production',
  resolve: {
    modules: [
      '/Users/simonmarklucas/Documents/GitHub/JavaJSTest/build/js/packages/JavaJSTest/kotlin-dce',
      'node_modules'
    ]
  },
  plugins: [],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'kotlin-source-map-loader'
        ],
        enforce: 'pre'
      }
    ]
  },
  entry: {
    main: [
      '/Users/simonmarklucas/Documents/GitHub/JavaJSTest/build/js/packages/JavaJSTest/kotlin-dce/JavaJSTest.js'
    ]
  },
  output: {
    path: '/Users/simonmarklucas/Documents/GitHub/JavaJSTest/build/distributions',
    filename: [Function: filename],
    library: 'JavaJSTest',
    libraryTarget: 'umd'
  },
  devtool: 'source-map'
}