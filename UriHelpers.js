var lib = require('../components/functions');

exports.toAbsoluteUri = function toAbsoluteUri(str, params) {

    str = str || "";

    str = lib.parameterize(str, params);

    return 'users-home#' + str.replace('(', '').replace(')', '');
}

exports.parameterize = lib.parameterize;

exports.domainDecomposedUri = function (apiBaseUri) {
    return apiBaseUri + '/' + 'decomposed';
}

exports.domainUri = function createUri(apiBaseUri) {
    return apiBaseUri;
}