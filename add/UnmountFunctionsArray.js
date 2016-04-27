var ee = require('../EventEmitter');

module.exports = function UnmountFunctionsArrayBuilder(config) {
    var unmountFunctionsArray = [];
    unmountFunctionsArray.push(() => {
        var $this = this;
        console.info("$this", $this);

        config.eventHandlersArray.forEach(handle => {
            ee.removeListener(handle.event, handle.handler);
        })
    });

    return unmountFunctionsArray;
};