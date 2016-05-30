"use strict";
var React = require('react');
var {Grid, Row, Col, FormGroup,
    ControlLabel, FormControl, HelpBlock} = require('react-bootstrap');

var Form;
module.exports = Form = React.createClass({
    getDefaultProps: function () {
        return {
            keys: [
                {
                    name: 'id',
                    label: 'ID',
                    type: 'number',
                },
                {
                    name: 'name',
                    label: 'Name',
                    type: 'string',
                    isHidden: true,
                },
                {
                    name: 'date',
                    label: 'Date',
                    type: 'datetime',
                },
                {
                    name: 'fatal',
                    label: 'Fatal',
                    type: 'string',
                },
            ],
            instance: {name: 'Sohan', id: 45, date: '45/25-5015', fatal: 'This is Bad.'},
            exclude: ['fatal'],
            onChange: e => null,
        };
    },
    getInitialState: function () {
        return {};
    },
    render: function () {
        var $this = this;
        var instance = $this.props.instance || {};
        var keys = $this.props.keys || [];
        var excludeSet = $this.props.exclude.reduce((map, rr) => {
            map[rr] = rr;
            return map;
        }, {});

        return (

            <form>

                {
                    keys.map(key => {

                        if (!!excludeSet[key.name]) return null;

                        if (!!key.isHidden) {
                            return null;
                        }

                        if (!!key.format) {
                            return key.format(instance[key.name], instance);
                        }

                        return (
                            <Col md={key.col || 6} key={key.name}>

                                <FormGroup>

                                    <ControlLabel>
                                        {key.label}:
                                    </ControlLabel>

                                    <FormControl
                                        type="text"
                                        placeholder={key.label}
                                        value={instance[key.name]}
                                        />

                                </FormGroup>

                            </Col>
                        );

                    })
                }

            </form>
        );
    }
});