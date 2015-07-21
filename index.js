var pp = require('preprocess');

module.exports = function(source) {
	var preprocessed_source = pp.preprocess(source, {}, {type: 'js'});
	return preprocessed_source;
};