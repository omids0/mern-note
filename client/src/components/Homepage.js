import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllNotesAction,
  removeNoteAction,
} from "../redux/actions/notesActions";
import { Link } from "react-router-dom";

export default function Homepage() {
  const dispatch = useDispatch();
  const notesState = useSelector((state) => state.getAllNotesReducer);
  const { loading, error, notes } = notesState;

  useEffect(() => {
    dispatch(getAllNotesAction());
  }, []);

  return (
    <div className="homepage">
      {loading ? (
        <h3>Loading...</h3>
      ) : error ? (
        <h3>Something went wrong.</h3>
      ) : (
        notes.map((note) => (
          <div className="note" key={note._id}>
            <div className="note-header">
              <Link className="note-link" to={`/edit/${note._id}`}>
                <h2>{note.title}</h2>
              </Link>
              <button
                className="remove_x"
                onClick={() => dispatch(removeNoteAction(note._id))}
              >
                X
              </button>
            </div>
            <hr />
            <Link className="note-link" to={`/edit/${note._id}`}>
              <p className="note-body">{note.body}</p>
            </Link>
          </div>
        ))
      )}
      {notes && notes.length < 1 && <h3>You don't have any Note to show...</h3>}
    </div>
  );
}
