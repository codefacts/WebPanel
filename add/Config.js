module.exports = function ConfigBuilder(domain, baseUri, apiBaseUri) {
    var config = {domain, baseUri, apiBaseUri};

    config.state = {};
    config.props = {};

    config.elementBuildersArray = require('./ElementBuildersArray');

//reactComponentConfigurerLamda
    config.reactComponentConfigurerLamda = require('./ReactComponentConfigurerLamda')(config);

//createModalLamda
    config.createModalLamda = require('./CreateModalLamda')(config);

//hideModalLamda
    config.hideModalLamda = require('./HideModalLamda')(config);

//errorMsgLamda
    config.errorMsgLamda = require('./ErrorMsgLamda')(config);
    ;

//onCreateSuccessHandler
    config.onCreateSuccessHandler = require('./OnCreateSuccessHandler')(config);

//onCreateFailHandler
    config.onCreateFailHandler = require('./OnCreateFailHandler')(config);


//LoadersArray
    config.loadersArray = require('./LoadersArray')(config);


//stateCombinerLamda
    config.stateCombinerLamda = require('./StateCombinerLamda')(config);


//eventHandlersArray
    config.eventHandlersArray = [];

//mountFunctionsArray
    config.mountFunctionsArray = require('./MountFunctionsArray')(config);


//unmountFunctionsArray
    config.unmountFunctionsArray = require('./UnmountFunctionsArray')(config);

//interceptStateLamda
    config.interceptStateLamda = require('./InterceptStateLamda')(config);

//onChangeHandler
    config.onChangeHandler = require('./OnChangeHandler')(config);

//createLamda
    config.createLamda = require('./CreateLamda')(config);

//errorHandlerLamda
    config.errorHandlerLamda = require('./ErrorHandlerLamda')(config);

    return config;
};