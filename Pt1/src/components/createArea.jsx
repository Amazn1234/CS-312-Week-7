//import useState from React
import React, { useState } from "react";

//step 1
function CreateArea(props) {
  //create statefull constants for both note title and content using a function to set the values
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  //create function to change content of note
  function handleChange(event) {
    //set name/value variable as a object
    const { name, value } = event.target;
    //recieves previous note which adds to it
    setNote((prevNote) => {
      return {
        //grabs previous note and adds to it using the spread operator; "..."
        ...prevNote,
        //turns name var into value instead of just the name "name"
        [name]: value,
      };
    });
  }

  //step 2
  function submitChange(event) {
    //prevents complete refresh of the page
    event.preventDefault();

    //equivalent to calling addNote in app.jsx, passing the current note
    props.onAdd(note);

    //delete text in text boxes
    setNote({
      title: "",
      content: "",
    });
    //trigger a function to pass the note back to the app.jsx file
  }

  return (
    <div>
      <form>
        <input
          name="title"
          //enable change of the value with a function
          onChange={handleChange}
          //set value
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          //enable change of the value with a function
          onChange={handleChange}
          //set value
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitChange}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
