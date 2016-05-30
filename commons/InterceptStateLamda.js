module.exports = function InterceptStateLamdaBuilder(config) {
    var interceptStateLamda = function (state) {
        var $this = this;
        console.info("$this", $this);

        return state;
    };
    return interceptStateLamda;
};