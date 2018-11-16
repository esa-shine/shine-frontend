import uglify from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel';
import css from 'rollup-plugin-css-only';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'janus/examples/examples.js',
  output: {
    format: 'iife',
    file: 'dist/examples.min.js'
  },
  plugins: [
    resolve(),
    commonjs(),
    css({ output: 'dist/examples.min.css' }),
    babel({
      exclude: 'node_modules/**'
    }),
    uglify()
  ]
};