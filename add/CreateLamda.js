module.exports = function CreateLamdaBuilder(config) {

    var service = require('../Service')(config.domain, config.apiBaseUri);

    var createLamda = function (domainInstance) {
        var $this = this;
        console.info("$this", $this);

        service
            .create(domainInstance)
            .then(service.find)
            .then(config.onCreateSuccessHandler.bind($this))
            .catch(config.onCreateFailHandler.bind($this))
        ;
    }

    return createLamda;
};