'use strict';
module.exports = function (link) {
	if (typeof link !== 'string') {
		return {};
	}

	return link.split(', ').reduce(function (result, part) {
		var match = part.match('<(.*?)>; rel="(.*?)"');

		if (match && match.length === 3) {
			result[match[2]] = match[1];
		}

		return result;
	}, {});
};
