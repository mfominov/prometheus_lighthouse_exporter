'use strict';
/** @type {LH.Config.Json} */
module.exports = {
  extends: 'lighthouse:Default',
  settings: {
    emulatedFormFactor: 'desktop',
	throttlingMethod: 'provided',
  },
};

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
