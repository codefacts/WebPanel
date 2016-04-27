var Promise = require('bluebird');
var UriHelpers = require('./../UriHelpers');
var Service = require('./../Service');
var ee = require('./../EventEmitter');

function AddViewComposer(domain, baseUri, apiBaseUri) {

    var config = require('./Config')(domain, baseUri, apiBaseUri);

    //Build
    var build = require('./Builder')(config);

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

    function onChange(onChangeFunction) {
        config.onChangeHandler = onChangeFunction || config.onChangeHandler;
    }

    function create(createFunction) {
        config.createLamda = createFunction || config.createLamda;
    }

    function onCreateSuccess(onCreateSuccessFunction) {
        config.onCreateSuccessHandler = onCreateSuccessFunction || config.onCreateSuccessHandler;
    }

    function onCreateFail(onCreateFailFunction) {
        config.onCreateFailHandler = onCreateFailFunction || config.onCreateFailHandler;
    }

    function createErrorMessage(errorMessageFunction) {
        config.errorMsgLamda = errorMessageFunction || config.errorMsgLamda;
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
        loaders, eventHandlers, elements, onChange, create, onCreateSuccess,
        onCreateFail, createErrorMessage, interceptState,
        errorHandler, combineState, reactComponent, createModal, hideModal, build
    };
}

module.exports = AddViewComposer;