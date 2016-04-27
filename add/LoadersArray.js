module.exports = function LoadersArrayBuilder(config) {
    var service = require('../Service')(config.domain, config.apiBaseUri);
    var loadersArray = [];
    loadersArray.push(service.findDecomposed());
    return loadersArray;
};