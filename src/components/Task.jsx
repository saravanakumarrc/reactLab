import React, { Component } from 'react';

export default class Tasks extends Component {
    onDelete = () => {
        this.props.onDelete(this.props.description)
    }
    render() {
        return (<div>{this.props.description}<span onClick={() => this.props.onDelete(this.props.description)}>x</span></div>)
    }
}