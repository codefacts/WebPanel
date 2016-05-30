module.exports = function OnChangeHandlerBuilder(config) {
    var onChangeHandler = function (e) {
        var $this = this;
        console.info("$this", $this);

        var obj = $this.state[config.domain] || {};

        obj[e.target.name] = e.target.value;

        var newState = {};
        newState[domain] = obj;
        $this.setState(config.interceptStateLamda.call($this, newState) || newState);
    };

    return onChangeHandler;
};