module.exports = {
    presets: [['@babel/preset-env', {targets: {node: 'current'}}],
             ['@babel/preset-react',{runtime:'automatic'}],
  
  
  ],
   
  };


//   we are writing own configuretion so we have to make changes
// so that while overwrite babelconfig if doesnot make error
// Note: JavaScript Babel configs (e.g. babel.config.js) 
// should be avoided. These cause Parcel’s caching 
// to be less effective, which means all of your JS
// files will be recompiled each time you restart Parcel. 
// To avoid this, use a JSON-based 
// config format instead (e.g. babel.config.json).


// o disable Babel transpilation in Parcel,
//  override the default Parcel config for 
// JavaScript to exclude @parcel/transformer-babel.

// .parcelrc:
// {
//   "extends": "@parcel/config-default",
//   "transformers": {
//     "*.{js,mjs,jsx,cjs,ts,tsx}": [
//       "@parcel/transformer-js",
//       "@parcel/transformer-react-refresh-wrap"
//     ]
//   }
// }