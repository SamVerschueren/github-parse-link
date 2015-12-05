'use strict';
var rels = ['prev', 'next', 'last', 'first'];
module.exports = function (link) {
	if (typeof link !== 'string') {
		throw new TypeError('Expected a string');
	}

	var result = {};

	rels.forEach(function (rel) {
		var url = link.match('<([^>]*?)>; rel="' + rel + '"');
		if (url) {
			result[rel] = url[1];
		}
	});

	return result;
};
