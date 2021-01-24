// webpack.mix.js

let mix = require('laravel-mix');

mix.postCss('css/app.css', 'dist', [
    require('tailwindcss')
]);