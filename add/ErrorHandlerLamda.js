module.exports = function ErrorHandlerLamdaBuilder(config) {
    var errorHandlerLamda = function (e) {
        var $this = this;
        console.info("$this", $this);

        console.error(e);
    };

    return errorHandlerLamda;
};