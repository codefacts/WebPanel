"use strict";
var React = require('react');

var AddView;

module.exports = AddView = React.createClass({
    getDefaultProps: function () {
        return {};
    },
    render: function () {
        var $this = this;

        return (

            <div className="row">
                <div className="col-md-12">

                    {$this.props.children}

                    {($this.state.execute || (() => null)).call($this)}

                </div>
            </div>
        );
    }
});