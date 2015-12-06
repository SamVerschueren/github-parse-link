'use strict';
module.exports = function (link) {
	if (typeof link !== 'string') {
		throw new TypeError('Expected a string');
	}

	return link.split(', ').reduce(function (result, part) {
		var matcher = part.match('<(.*?)>; rel="(.*?)"');

		if (matcher.length === 3) {
			result[matcher[2]] = matcher[1];
		}

		return result;
	}, {});
};
