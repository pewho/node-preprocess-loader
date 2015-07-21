var pp = require('preprocess');

module.exports = function(source) {
	this.cacheable && this.cacheable();
	var preprocessed_source = pp.preprocess(source);
	return preprocessed_source;
};