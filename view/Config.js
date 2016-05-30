module.exports = function ConfigBuilder(domain, baseUri, apiBaseUri) {
    var config = {domain, baseUri, apiBaseUri};

    config.state = {};
    config.props = {};

//elementBuildersArray
    config.elementBuildersArray = require('./ElementBuildersArray')(config);

//LoadersArray
    config.loadersArray = require('./../commons/LoadersArray')(config);

//eventHandlersArray
    config.eventHandlersArray = [];

//mountFunctionsArray
    config.mountFunctionsArray = require('./../commons/MountFunctionsArray')(config);

//unmountFunctionsArray
    config.unmountFunctionsArray = require('./../commons/UnmountFunctionsArray')(config);

//stateCombinerLamda
    config.stateCombinerLamda = require('./../commons/StateCombinerLamda')(config);

//interceptStateLamda
    config.interceptStateLamda = require('./../commons/InterceptStateLamda')(config);

//reactComponentConfigurerLamda
    config.reactComponentConfigurerLamda = require('./../commons/ReactComponentConfigurerLamda')(config);

//errorHandlerLamda
    config.errorHandlerLamda = require('./ErrorHandlerLamda')(config);

    return config;
};