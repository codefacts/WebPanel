var {Modal} = require('react-bootstrap');

module.exports = function CreateModalLamdaBuilder(config) {

    return function createModalLamda(header, body, footer) {
        var $this = this;
        console.info("$this", $this);

        return (
            <div className="static-modal">
                <Modal.Dialog>

                    <Modal.Header>
                        {
                            header
                        }
                    </Modal.Header>

                    <Modal.Body>
                        {
                            body
                        }
                    </Modal.Body>

                    <Modal.Footer>
                        {
                            footer
                        }
                    </Modal.Footer>

                </Modal.Dialog>
            </div>
        );

    };
};