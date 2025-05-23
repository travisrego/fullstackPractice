import Note from "./Note.jsx";

const App = ({ notes }) => {
    return (
        <div>
            <h1>My Notes</h1>
            <ul>
                {notes.map((note) => (
                    <Note key={note.id} note={note} />
                ))}
            </ul>
        </div>
    );
};

export default App;
