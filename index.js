'use strict';

module.exports = {
	before (config) {
		let { debug } = browser.options;

		if (typeof debug === 'number') {
			console.log('Paused in debugger on port', debug - 1);

			/** The first breakpoint you'd to skip */
			debugger;
		}
	}
};
