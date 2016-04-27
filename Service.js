var $ = require('./Ajax');
var Promise = require('bluebird');
var UriHelpers = require('./UriHelpers');

function Service(domain, apiBaseUri) {

    function find(id, data, headers) {

        return new Promise(function (resolve, reject) {

            var domainUri = UriHelpers.getDomainDecomposedUri(domain, apiBaseUri) + '/' + id;

            data = data || {};
            headers = headers || {};

            $.ajax({
                url: domainUri,
                method: "get",
                data: data,
                headers: headers,
                success: resolve,
                error: reject,
                dataType: 'json'
            })

        });

    }

    function findDecomposed(data, headers) {

        return new Promise(function (resolve, reject) {

            var domainUri = UriHelpers.getDomainDecomposedUri(domain, apiBaseUri);

            data = data || {};
            headers = headers || {};

            $.ajax({
                url: domainUri,
                method: "get",
                data: data,
                headers: headers,
                success: resolve,
                error: reject,
                dataType: 'json'
            })

        });
    }

    function create(instance, headers) {

        return new Promise(function (resolve, reject) {

            var domainUri = UriHelpers.domainUri(domain, apiBaseUri);

            headers = headers || {};

            $.ajax({
                url: domainUri,
                method: "post",
                data: instance,
                headers: headers,
                success: resolve,
                error: reject,
                dataType: 'json'
            })

        });

    }

    return {find, findDecomposed, create};
}


module.exports = Service;