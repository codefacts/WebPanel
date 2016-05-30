var {Button, Modal} = require('react-bootstrap');

module.exports = function OnCreateSuccessHandlerBuilder(config) {

    var onCreateSuccessHandler = function (instance) {
        var $this = this;
        console.info("$this", $this);

        $this.setState({
            execute: () => {
                var header = (
                    <Modal.Title>Operation successful.</Modal.Title>
                );
                var body = (
                    <div>
                        One fine body...
                    </div>
                );
                var footer = (
                    <div>
                        <Button>Close</Button>
                        <Button bsStyle="primary">Save changes</Button>
                    </div>
                );
                return config.createModalLamda.call($this, header, body, footer);
            }
        });
    };

    return onCreateSuccessHandler;

};