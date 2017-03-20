'use strict';

module.exports = {
	before (config) {
		let { debug } = browser.options;

		if (!debug) {
			return;
		}

		let { port } = Object.assign({ port: 6666 }, config.debugOptions);

		console.log('Paused in debugger on port', port);

		/** The first breakpoint should be skipped */
		debugger;
	}
};
