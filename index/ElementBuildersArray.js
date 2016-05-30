var React = require('react');
var lib = require('../../components/functions');
var DataGrid = require('../commons/views/DataGrid');

module.exports = function ElementBuildersArrayBuilder(config) {
    var elementBuildersArray = [];

    elementBuildersArray.push(function (props, state) {
        var id = "create-form-1254";
        console.info("element-id", id);
        return (
            <div id={id} key={id} className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">{lib.firstUpper(config.domain.name)} List</h3>
                </div>

                <DataGrid/>
                
            </div>
        );
    });

    return elementBuildersArray;

}