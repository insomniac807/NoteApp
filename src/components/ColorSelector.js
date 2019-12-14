import React, { Component } from 'react';

export default class ColorSelector extends Component {

    constructor(props) {
        super(props);
        this.setParentColour = this.setParentColour.bind(this);
    }

    setParentColour = event => {
        this.props.onColourChange(event.target.value);
    }

    render() { 
        return ( 
            <div>
                <label htmlFor="colours">Change Colour </label>
                <select id="colours" name="colours" onChange={this.setParentColour}>
                    <option value="white" style={{backgroundColor: '#ffffff'}}></option>
                    <option value="red" style={{backgroundColor: '#ff0000'}}></option>
                    <option value="blue" style={{backgroundColor: '#0000ff'}}></option>
                    <option value="green" style={{backgroundColor: '#33cc33'}}></option>
                    <option value="orange" style={{backgroundColor: '#ff9900'}}></option>
                    <option value="purple" style={{backgroundColor: '#800080'}}></option>
                    <option value="brown" style={{backgroundColor: '#996633'}}></option>
                    <option value="yellow" style={{backgroundColor: '#ffff00'}}></option>
                </select>
            </div>
         );
    }
}