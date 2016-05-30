var React = require('react');
var Form = require('../../commons/views/Form');

module.exports = function ElementBuildersArrayBuilder(config) {
    var elementBuildersArray = [];

    elementBuildersArray.push(function (props, state) {
        var id = "create-form-1254";
        return (
            <div id={id} key={id} className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Add New {config.domain.label}</h3>
                </div>
                <div className="panel-body">

                    <Form/>

                </div>
            </div>
        );
    });

    return elementBuildersArray;

}