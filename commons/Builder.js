var React = require('react');

function Builder(config) {

    return function build() {

        var comp = {

            getDefaultProps: function () {
                return config.props;
            },
            getInitialState: function () {
                return config.state;
            },
            componentDidMount: function () {
                var $this = this;
                config.mountFunctionsArray.forEach(fn => fn.call($this));
            },
            compoenentWillUnmount: function () {
                var $this = this;
                config.unmountFunctionsArray.forEach(fn => fn.call($this));
            },
            render: function () {
                var $this = this;

                console.info("<-----------view_render----------->");

                return (

                    <div className="row">
                        <div className="col-md-12">

                            {
                                config.elementBuildersArray.map(fn => fn.call($this, $this.props, $this.state))
                            }

                            {($this.state.execute || (() => null)).call($this)}

                        </div>
                    </div>
                );
            }
        };

        var ViewComposition = React.createClass(config.reactComponentConfigurerLamda(comp) || comp);

        console.info("ViewComposition");
        return ViewComposition;

    };

}

module.exports = Builder;