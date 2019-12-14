import React, { Component } from 'react';
import styled from 'styled-components';

const NoteForm = styled.div`
    display: grid;
    width: 50vw;
    height: 10vh;
    grid-template-columns: 4fr 2fr;
    grid-gap: 5px;
`;

const AddButton = styled.button`
    background-color: blue;
    font-size: 150%;
    font-weight: bold;
    color: #fff;
`;

export default class AddNoteForm extends Component {
    
    constructor(props) {
        super(props);
        this.state={
            userInput: ""
        }
        this.handleInput = this.handleInput.bind(this);
        this.sendNoteToParent = this.sendNoteToParent.bind(this);
    }

    handleInput = event => {
        this.setState({userInput: event.target.value});
    }

    sendNoteToParent = () => {
        let value = this.state.userInput;
        this.setState({userInput: ""});
        this.props.onAddNote(value);
    }

    render() { 
        return ( 
            <NoteForm>
                <textarea onChange={this.handleInput} value={this.state.userInput}/>
                <AddButton onClick={this.sendNoteToParent}>Create Note</AddButton>
            </NoteForm>
        );
    }
}