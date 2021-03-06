var Promise = require('bluebird');
var UriHelpers = require('./../UriHelpers');
var ee = require('./../EventEmitter');

function IndexViewComposer(domain, baseUri, apiBaseUri) {

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

    function interceptState(interceptStateFunction) {
        config.interceptStateLamda = interceptStateFunction || config.interceptStateLamda;
    }

    function errorHandler(errorHandlerFunction) {
        config.errorHandlerLamda = errorHandlerFunction || config.errorHandlerLamda;
    }

    function combineState(stateCombinerFunction) {
        config.stateCombinerLamda = stateCombinerFunction || config.stateCombinerLamda;
    }

    function reactComponent(reactComponentConfigurerFunction) {
        config.reactComponentConfigurerLamda = reactComponentConfigurerFunction || config.reactComponentConfigurerLamda;
    }

    function createModal(createModalFunction) {
        config.createModalLamda = createModalFunction || config.createModalLamda;
    }

    function hideModal(hideModalFunction) {
        config.hideModalLamda = hideModalFunction || config.hideModalLamda;
    }

    return {
        defaultState, defaultProps, mountFunctions, unmountFunctions,
        loaders, eventHandlers, elements,
        interceptState, errorHandler, combineState,
        reactComponent, createModal, hideModal, build
    };
}

module.exports = IndexViewComposer;