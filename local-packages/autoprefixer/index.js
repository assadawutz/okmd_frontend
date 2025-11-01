const autoprefixer = () => ({
  postcssPlugin: 'autoprefixer-stub',
  Once() {},
})

autoprefixer.postcss = true
autoprefixer.default = autoprefixer
autoprefixer.info = () => 'autoprefixer-stub'

module.exports = autoprefixer
