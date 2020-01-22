import React, { Component } from 'react';

class Keypad extends Component {
  render() {
    return (
      <div className="button__grid">
        <div class="button__row--1">
          <button name="(" onClick={ e => this.props.onClick(e.target.name)}>(</button>
          <button name=")" onClick={ e => this.props.onClick(e.target.name)}>)</button>
          <button name="CE" onClick={ e => this.props.onClick(e.target.name)}>CE</button>
          <button name="C" onClick={ e => this.props.onClick(e.target.name)}>C</button>
        </div>

        <div class="button__row--2">
          <button name="7" onClick={ e => this.props.onClick(e.target.name)}>7</button>
          <button name="8" onClick={ e => this.props.onClick(e.target.name)}>8</button>
          <button name="9" onClick={ e => this.props.onClick(e.target.name)}>9</button>
          <button name="/" onClick={ e => this.props.onClick(e.target.name)}>&divide;</button>
        </div>

        <div class="button__row--3">
          <button name="4" onClick={ e => this.props.onClick(e.target.name)}>4</button>
          <button name="5" onClick={ e => this.props.onClick(e.target.name)}>5</button>
          <button name="6" onClick={ e => this.props.onClick(e.target.name)}>6</button>
          <button name="*" onClick={ e => this.props.onClick(e.target.name)}>&times;</button>
        </div>

        <div class="button__row--4">
          <button name="1" onClick={ e => this.props.onClick(e.target.name)}>1</button>
          <button name="2" onClick={ e => this.props.onClick(e.target.name)}>2</button>
          <button name="3" onClick={ e => this.props.onClick(e.target.name)}>3</button>
          <button name="-" onClick={ e => this.props.onClick(e.target.name)}>-</button>
        </div>

        <div class="button__row--5">
          <button name="0" onClick={ e => this.props.onClick(e.target.name)}>0</button>
          <button name="." onClick={ e => this.props.onClick(e.target.name)}>.</button>
          <button name="=" onClick={ e => this.props.onClick(e.target.name)}>=</button>
          <button name="+" onClick={ e => this.props.onClick(e.target.name)}>+</button>
        </div>
      </div>
    );
  }
}

export default Keypad;