var lib = require('../components/functions');

exports.toAbsoluteUri = function toAbsoluteUri(str, params) {

    str = str || "";

    str = lib.parameterize(str, params);

    return 'users-home#' + str.replace('(', '').replace(')', '');
}

exports.parameterize = lib.parameterize;

exports.getDomainDecomposedUri = function (domain, apiBaseUri) {
    return apiBaseUri + '/' + domain + '/' + 'decomposed';
}

exports.domainUri = function createUri(domain, apiBaseUri) {
    return apiBaseUri + '/' + domain;
}