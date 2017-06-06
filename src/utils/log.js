import { configLog } from "./config";
//FLUTTERSHY : https://vignette4.wikia.nocookie.net/mlp/images/d/d6/Fluttershy_ID_S1E17.png

var log = {
	info: (function() {
		if (!window.console || !console.info) {
			return;
		}
		if (configLog.info)
			return Function.prototype.bind.call(console.info, console);
		return function() {};
	})(),
	log: (function() {
		if (!window.console || !console.log) {
			return;
		}
		if (configLog.log)
			return Function.prototype.bind.call(console.log, console);
		return function() {};
	})(),
	warn: (function() {
		if (!window.console || !console.warn) {
			return;
		}
		if (configLog.warn)
			return Function.prototype.bind.call(console.warn, console);
		return function() {};
	})(),
	error: (function() {
		if (!window.console || !console.error) {
			return;
		}
		if (configLog.warn)
			return Function.prototype.bind.call(console.error, console);
		return function() {};
	})()
};

export default log;
