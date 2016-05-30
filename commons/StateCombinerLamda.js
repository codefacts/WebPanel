module.exports = function StateCombinerLamdaBuilder(config) {
    return function stateCombinerLamda(statesArray) {
        var $this = this;
        console.info("$this", $this);

        return statesArray.reduce((map, state) => {
            state = state || {};

            for (var x in state) {
                map[x] = state[x];
            }
            return map;
        }, {});
    };
};