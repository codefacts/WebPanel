module.exports = function AddActionChainBuilder(config) {

    return {
        create: require('./CreateLamda')(config),
        successHandler: require('./successHandler')(config),
        errorHandler: require('./errorHandler')(config),
    };

};