import React, { Component } from 'react';
import './switch.css';

export default class Switch extends Component {
  
  render() {
    let item = this.props.item;
    return (
      <div className="switch">
        <div>{this.props.item}</div>
        <div className="toggleBody" onClick={this.props.onClick(item)}>
          <div className="toggleBit" id={this.props.item} />
        </div>
        <div className="lineUnder" />
      </div>
    );
  }
}