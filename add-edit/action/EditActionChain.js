module.exports = function EditActionChainBuilder(config) {

    return {
        update: require('./UpdateLamda')(config),
        successHandler: require('./successHandler')(config),
        errorHandler: require('./errorHandler')(config),
    };

};