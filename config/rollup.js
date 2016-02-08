import babel from 'rollup-plugin-babel';

export default {
  entry: 'src/js/main.js',
  dest: 'dist/picky-highlight.js',
  plugins: [ babel() ],
  format: 'umd',
  moduleName: 'Highlight',
  sourceMap: true
};