module.exports = function OnCreateFailHandlerBuilder(config) {

    var onCreateFailHandler = function (e) {
        var $this = this;
        console.info("$this", $this);

        alert("Creation Failed");
    };

    return onCreateFailHandler;
};