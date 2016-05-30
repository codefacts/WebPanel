"use strict";
var React = require('react');
const {Table, Column, Cell} = require('fixed-data-table');
var Stream = require('streamjs');

var DataGrid;
module.exports = DataGrid = React.createClass({
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
                },
                {
                    name: 'email',
                    label: 'Email',
                    type: 'text',
                },
                {
                    name: 'fatal',
                    label: 'Fatal',
                    type: 'string',
                },
            ],
            data: [
                {id: 1, name: 'Rylan', email: 'Angelita_Weimann42@gmail.com'},
                {id: 2, name: 'Amelia', email: 'Dexter.Trantow57@hotmail.com'},
                {id: 3, name: 'Estevan', email: 'Aimee7@hotmail.com'},
                {id: 4, name: 'Florence', email: 'Jarrod.Bernier13@yahoo.com'},
                {id: 5, name: 'Tressa', email: 'Yadira1@hotmail.com'},
            ],
            //data: [],
            exclude: ['fatal'],
        };
    },
    getInitialState: function () {
        return {};
    },
    render: function () {
        var $this = this;
        var data = $this.props.data || [];
        var excludeMap = $this.props.exclude.reduce((map, key) => {
            map[key] = key;
            return map;
        }, {});

        class MyTextCell extends React.Component {
            render() {
                const {rowIndex, field, data} = this.props;
                return (
                    <Cell {...this.props}>
                        {data[rowIndex][field]}
                    </Cell>
                );
            }
        }

        class MyLinkCell extends React.Component {
            render() {
                const {rowIndex, field, data} = this.props;
                const link = data[rowIndex][field];
                return (
                    <Cell {...this.props}>
                        <a href={link}>{link}</a>
                    </Cell>
                );
            }
        }

        return (

            <Table
                rowsCount={data.length}
                rowHeight={50}
                headerHeight={50}
                width={1000}
                height={500}>

                {
                    Stream($this.props.keys)
                        .filter(keyObj => (!keyObj.isHidden && !excludeMap[keyObj.name]))
                        .map(keyObj => {

                            var header = (
                                <Cell>{keyObj.label}</Cell>
                            );

                            var cell = (
                                <MyTextCell
                                    data={data}
                                    field={keyObj.name}
                                    />
                            );

                            return (
                                <Column
                                    header={header}
                                    cell={cell}
                                    width={200}
                                    />
                            );
                        })
                        .toArray()
                }

            </Table>

        );
    }
});