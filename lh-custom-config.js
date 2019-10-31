module.exports = {
  extends: 'lighthouse:default',
  settings: {
    onlyCategories: ['performance'],
    emulatedFormFactor: 'desktop'
    onlyAudits: [
      'first-meaningful-paint',
      'speed-index',
      'first-cpu-idle',
      'interactive',
    ],
  },
};
