module.exports = {
  plugins: {
    'postcss-mixins': {},
    'postcss-preset-env': {
      importFrom: ['./assets/styles/mixins/media-queries.css'],

      features: {
        'nesting-rules': true,
        'custom-media-queries': true,
        'media-query-ranges': true,
      },
    },
  },
};
