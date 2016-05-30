var React = require('react');
var Single = require('../commons/views/Single');

module.exports = function ElementBuildersArrayBuilder(config) {
    var elementBuildersArray = [];

    elementBuildersArray.push(function (props, state) {
        var id = "create-form-1254";
        return (
            <div id={id} key={id} className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">View {config.domain.label}</h3>
                </div>
                <div className="panel-body">

                    <Single/>

                </div>
            </div>
        );
    });

    return elementBuildersArray;

}