module.exports = function HideModalLamdaBuilder(config) {
    var hideModalLamda = function () {
        var $this = this;
        console.info("$this", $this);
    };

    return hideModalLamda;
};