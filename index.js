var pp = require('preprocess');

module.exports = function(source) {
	var preprocessed_source = pp.preprocess(source);
	return preprocessed_source;
};