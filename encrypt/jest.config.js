module.exports = {
  transform: {
    '.(js|ts)': '@sucrase/jest-plugin'
  },
  collectCoverageFrom: ['src/**/*.js']
}
