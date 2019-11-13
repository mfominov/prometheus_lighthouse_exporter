'use strict';
/** @type {LH.Config.Json} */
const config = {
  extends: 'lighthouse:desktop',
  settings: {
    onlyCategories: ['performance'],
    maxWaitForFcp: 15 * 1000,
    maxWaitForLoad: 35 * 1000,
    emulatedFormFactor: 'desktop',
    /**throttling: {
      rttMs: 40,
      throughputKbps: 10 * 1024,
      cpuSlowdownMultiplier: 1,
    },
    Skip the h2 audit so it doesn't lie to us. See https://github.com/GoogleChrome/lighthouse/issues/6539
    skipAudits: ['uses-http2'],*/
  },
};
module.exports = config;

/**
module.exports = {
  extends: 'lighthouse:default',
  settings: {
    onlyCategories: ['performance'],
    emulatedFormFactor: 'desktop',
    onlyAudits: [
      'first-meaningful-paint',
      'speed-index',
      'first-cpu-idle',
      'interactive',
    ],
  },
};
*/
