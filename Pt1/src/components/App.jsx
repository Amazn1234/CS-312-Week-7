import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  //add note to an array, start with empty note
  const [notes, setNotes] = useState([]);

  //step 4
  //get note back from createArea
  function addNote(note) {
    //add note to the array
    setNotes((prevNotes) => {
      //use spread op to add new note to the previous list of notes
      return [...prevNotes, note];
    });
  }

  //step 5 delete Note
  function deleteNote(id) {
    //debugging
    //console.log("Delete Was Triggered")
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        //return array of all items that don't have the id of the item to be deleted
        return index !== id;
      });
    });
  }

  return (
    //loop through notes array and display them all via noteItem function
    <div>
      <Header />
      <CreateArea onAdd={addNote} />

      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
