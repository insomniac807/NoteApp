import React, { Component } from 'react';
import styled from 'styled-components';
import ColorSelector from './ColorSelector';

const NoteObject = styled.div`
    width: 20vw;
    height: 30vh;
    border: 1px solid black;
    text-align: center;
    display: grid;
    grid-template-rows: 1fr 3fr;
    grid-template-columns: 1.5fr 1fr 1fr;
`;

const CloseIcon = styled.div`
    border: 1px solid black;
    width: 20%;
    height: 35%;
    justify-self: end;
    margin-right: 10px;
    background-color: white;
    &:hover {
        cursor: pointer;
    }
`;

const MessageBody = styled.div`
    grid-column-start: 1;
    grid-column-end: 4;
    padding: 10px;
    margin: 10px;
    overflow-y: scroll;
`;

const EditMessage = styled.textarea`
    grid-column-start: 1;
    grid-column-end: 4;
    padding: 10px;
    margin: 10px;
`;

const EditButton = styled.button`
    height: 35%;
    justify-self: end;
    &:hover {
        cursor: pointer;
    }
`;

export default class Note extends Component {
    constructor(props) {
        super(props);
        this.state={
            backgroundColor: "#fff",
            editing: false,
            editedMessage: this.props.message
        }
        this.onColourChange = this.onColourChange.bind(this);
        this.onTextareaChange = this.onTextareaChange.bind(this);
        this.makeEditable = this.makeEditable.bind(this);
        this.saveEdits = this.saveEdits.bind(this);
    }

    //passed to ColorSelector as prop
    onColourChange = colour => {
        this.setState({backgroundColor: colour});
    }

    onTextareaChange = event => {
        this.setState({editedMessage: event.target.value});
    }

    makeEditable = () => {
        this.setState({editing: true});
    }

    //calls parent function passed as prop
    saveEdits = (id, message) => {
        this.setState({editing: false});
        this.props.onSave(id, message);
    }

    render() { 
        return ( 
        <NoteObject style={{backgroundColor: this.state.backgroundColor}}>
            <ColorSelector onColourChange={this.onColourChange}/>
            {this.state.editing ? <EditButton onClick={() => this.saveEdits(this.props.id, this.state.editedMessage)}>Save</EditButton> : <EditButton onClick={this.makeEditable}>Edit</EditButton>}
            <CloseIcon onClick={() => this.props.onDelete(this.props.id)}>X</CloseIcon>
            {this.state.editing ?  <EditMessage defaultValue={this.props.message} onChange={this.onTextareaChange}></EditMessage> : <MessageBody>{this.props.message}</MessageBody>}
        </NoteObject> 
        );
    }
}