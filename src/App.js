import React, { Component } from 'react';
import styled from 'styled-components';
import AddNoteForm from './components/AddNoteForm';
import Note from './components/Note';

const ApplicationWrapper = styled.div`
  display: grid;
  grid-template-rows: 2fr auto;
  grid-gap: 10px;
`;

const MyNotes = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
`;

export default class App extends Component {
  constructor() {
    super();
    this.state={
      notes: []
    }
    this.onAddnote = this.onAddNote.bind(this);
    this.onDeleteNote = this.onDeleteNote.bind(this);
    this.onSaveEdits = this.onSaveEdits.bind(this);
  }

  //event emitter passed as prop and called from child AddNoteForm
  onAddNote = noteBody => {
    if(noteBody !== "") {
      let notes = this.state.notes;
      let nId = new Date().toISOString();
      let note = {id: nId, body: noteBody}
      notes.push(note);
      this.setState({notes});
    }
    else {
      window.alert("Note Body Cannot be Empty");
    }
  }

  //event emitter passed as prop and called from child Note
  onDeleteNote = id => {
    if(window.confirm("Do you want to delete this note?")) {
      let notes = this.state.notes.filter((note) => note.id !== id);
      this.setState({notes});
    }
  }

  //event emitter passed as prop and called from child Note
  onSaveEdits = (id, message) => {
   let notes = this.state.notes.map(note => {
     if(note.id === id) {
       return {id: note.id, body: message}
     }
     else {
       return note;
     }
   });
   this.setState({notes});
  }

  render() { 
    let i = 0;
    return ( 
      <ApplicationWrapper>
        <AddNoteForm onAddNote={this.onAddNote} />
        <MyNotes>
          {this.state.notes.map((note) => <Note key={i++} id={note.id} message={note.body} onDelete={this.onDeleteNote} onSave={this.onSaveEdits}/>)}
        </MyNotes>
      </ApplicationWrapper>
     );
  }
}