module.exports = function MountFunctionsArrayBuilder(config) {

    var mountFunctionsArray = [];
    mountFunctionsArray.push(function () {
        var $this = this;
        console.info("$this", $this);

        var promiseList = [];

        config.loadersArray.forEach(loader => {
            promiseList.push(loader.call($this));
        })

        Promise.all(promiseList)
            .then(statesArray => {
                var state = config.stateCombinerLamda.call($this, statesArray);
                $this.setState(state);
            })
            .catch(config.errorHandlerLamda.bind($this))
        ;

    });

    mountFunctionsArray.push(() => {
        var $this = this;
        console.info("$this", $this);

        config.eventHandlersArray.forEach(handle => {
            ee.on(handle.event, handle.handler.bind($this));
        })

    });

    return mountFunctionsArray;

};