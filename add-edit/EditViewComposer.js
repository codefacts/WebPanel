var Promise = require('bluebird');
var UriHelpers = require('./../UriHelpers');
var ee = require('./../EventEmitter');

function EditViewComposer(domain, baseUri, apiBaseUri) {

    var config = require('./Config')(domain, baseUri, apiBaseUri);

    //Build
    var build = require('./../commons/Builder')(config);

    //Configurer Functions
    function defaultState(stateConfigurer) {
        config.state[domain] = {};
        config.state = stateConfigurer(config.state) || config.state;
    }

    function defaultProps(propsConfigurer) {
        config.props = propsConfigurer(config.props) || config.props;
    }

    function mountFunctions(mountFunctionsConfigurer) {
        config.mountFunctionsArray = mountFunctionsConfigurer(config.mountFunctionsArray) || config.mountFunctionsArray;
    }

    function unmountFunctions(unmountFunctionsConfigurer) {
        config.unmountFunctionsArray = unmountFunctionsConfigurer(config.unmountFunctionsArray) || config.unmountFunctionsArray;
    }

    function loaders(loadersConfigurer) {
        config.loadersArray = loadersConfigurer(config.loadersArray) || config.loadersArray;
    }

    function eventHandlers(eventHandlersConfigurer) {
        config.eventHandlersArray = eventHandlersConfigurer(config.eventHandlersArray) || config.eventHandlersArray;
    }

    function elements(elementsConfigurer) {
        config.elementBuildersArray = elementsConfigurer(config.elementBuildersArray) || config.elementBuildersArray;
    }

    function errorHandler(errorHandlerFunction) {
        config.errorHandlerLamda = errorHandlerFunction || config.errorHandlerLamda;
    }

    function interceptState(interceptStateFunction) {
        config.interceptStateLamda = interceptStateFunction || config.interceptStateLamda;
    }

    function combineState(stateCombinerFunction) {
        config.stateCombinerLamda = stateCombinerFunction || config.stateCombinerLamda;
    }

    function reactComponent(reactComponentConfigurerFunction) {
        config.reactComponentConfigurerLamda = reactComponentConfigurerFunction || config.reactComponentConfigurerLamda;
    }

    return {
        defaultState, defaultProps, mountFunctions, unmountFunctions,
        loaders, eventHandlers, elements, errorHandler, interceptState, combineState, reactComponent, build
    };
}

module.exports = EditViewComposer;