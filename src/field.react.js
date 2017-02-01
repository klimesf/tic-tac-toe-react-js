import React from 'react';

export default class Field extends React.Component {
    constructor() {
        super();
        this.state = {};
        this._handleClick = this._handleClick.bind(this);
    }

    render() {
        let value;
        if (this.props.value === -1) {
            value = 'O';
        } else if (this.props.value === 1) {
            value = 'X';
        } else {
            value = ' ';
        }

        let className = "field " + (this.props.value > 0 ? "cross" : "circle");

        return <div className={className} onClick={this._handleClick}>{value}</div>;
    }

    _handleClick() {
        console.log("Field checked, x: " + this.props.x + ", y: " + this.props.y + ", value: " + this.props.value);
        this.props.game.onPlayerInput(this.props.x, this.props.y);
    }
}
