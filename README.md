Node-preprocess Loader for webpack
==================================

Webpack node-preprocess loader for js files.

Caution: this loader works only for JS file. Do not use it to preprocess CSS or HTML files...

Installation
------------

>>> npm install --save-dev pewho/node-preprocess-loader

Usage
-----

In **webpack.config.js**, section *loaders*, add this:

```
	 {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'node-preprocess-loader'
      }
```

Licence
-------

MIT