var Service = require('../Service');

module.exports = function LoadersArrayBuilder(config) {
    var loadersArray = [];
    var service = Service(config.domain, config.apiBaseUri);
    loadersArray.push(service.findDecomposed);
    return loadersArray;
};