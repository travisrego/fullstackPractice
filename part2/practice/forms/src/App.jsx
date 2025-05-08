import { useState, useEffect } from "react"; 
import axios from 'axios';
import Note from "./Note";

const App = () => {
  const [notes, setNotes] = useState([]); 
  const [newNote, setNewNote] = useState(''); 
  const [showAll, setShowAll] = useState(true);

  const hook = () => {
    console.log("Effect Started");
    axios.get('http://localhost:3001/notes').then((response) => {
        console.log("Promise Fullfilled");
        setNotes(response.data);
    })
  }

  useEffect(hook, []);
  console.log('Render', notes.length, 'notes');

  const notesToShow = showAll ? notes : notes.filter(note => note.important);

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      id: notes.length + 1,
      content: newNote,
      important: Math.random() < 0.5
    }
    console.log("Note Object Importance: ", noteObject.important);
    console.log("Button is pressed", event.target);
    setNotes(notes.concat(noteObject))
    setNewNote('')
  } 

  const onNoteChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  }

    return (
        <div>
          <h1>Notes</h1>
          <div>
            <button onClick={() => { setShowAll(!showAll) }}>
              show { showAll ? 'important' : 'all' }
            </button>
          </div>
          <ul>
          {notesToShow.map((note) => <Note key={note.id} note={note} />)}
          </ul>

          <form onSubmit={addNote}>
            <input type="text" name="notes" id="notes" value={newNote} onChange={onNoteChange} />&nbsp; 
            <button type="submit">Save</button>
          </form>

          {console.log("App Render Complete")}
        </div>
    );
};

export default App;