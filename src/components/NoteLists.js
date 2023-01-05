import Note from "./Note";
import AddNote from "./AddNote";

const NoteLists = ({ notes, handleAddNote, handleDeleteNote }) => {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note
          id={note.id}
          text={note.text}
          date={note.date}
          handleDeleteNote={handleDeleteNote}
        />
      ))}
      <AddNote
        handleAddNote={handleAddNote}
        handleDeleteNote={handleDeleteNote}
      />
    </div>
  );
};

export default NoteLists;
