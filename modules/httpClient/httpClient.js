var request = require('request');

function handle (func, options, cb) {
	func(options, function (err, inmsg, resp) {
		cb({
			statusCode: inmsg.statusCode,
			statusMessage: inmsg.statusMessage,
			body: resp
		});
	});
}

exports.request = function (options, cb) {
	handle(request, options, cb);
}
exports.get = function (options, cb) {
	handle(request.get, options, cb);
}
exports.post = function (options, cb) {
	handle(request.post, options, cb);
}
exports.put = function (options, cb) {
	handle(request.put, options, cb);
}
