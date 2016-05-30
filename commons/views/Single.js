"use strict";
var React = require('react');
var {Grid, Row, Col, Table} = require('react-bootstrap');

var Single;
module.exports = Single = React.createClass({
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
                    col: 2,
                },
                {
                    name: 'fatal',
                    label: 'Fatal',
                    type: 'string',
                },
            ],
            instance: {name: 'Sohan', id: 45, date: '45/25-5015', fatal: 'This is Bad.'},
            exclude: ['fatal'],
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

            <Grid>
                <Row>

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

                                    <strong>{key.label}: </strong>
                                    {instance[key.name]}

                                </Col>
                            );

                        })
                    }

                </Row>
            </Grid>
        );
    }
});