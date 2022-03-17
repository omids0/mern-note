/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  findNoteAction,
  updateNoteAction,
} from "../redux/actions/notesActions";

export default function EditNote(props) {
  const [title, settitle] = useState("");
  const [body, setbody] = useState("");
  const dispatch = useDispatch();
  const findNoteState = useSelector((state) => state.findNoteReducer);
  const { note, loadingFinding, error } = findNoteState;
  const id = props.match.params.id;

  useEffect(() => {
    console.log(id);
    dispatch(findNoteAction(id));
  }, []);

  useEffect(() => {
    if (note && note._id === id) {
      settitle(note.title);
      setbody(note.body);
    } else if (note && note._id !== id) {
      dispatch(findNoteAction(id));
    }
  }, [note, loadingFinding, error]);

  const updateNote = (e) => {
    e.preventDefault();
    if (body) {
      dispatch(updateNoteAction(id, { title, body }));
    }
  };

  function cancelbtn(e) {
    e.preventDefault();
    window.location.href = "/";
  }

  return (
    <div className="newnote">
      {loadingFinding && <h1>Loading...</h1>}
      {error && <h1>Something went wrong</h1>}
      {note && (
        <form className="form">
          <label>
            Note Title: <br />
            <input
              className="form-add-note"
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => settitle(e.target.value)}
            />
          </label>
          <label>
            Note Body: <br />
            <textarea
              className="form-add-note form-add-note-body"
              type="text"
              placeholder="Body"
              value={body}
              onChange={(e) => setbody(e.target.value)}
            />
          </label>
          <div className="form-group-btn">
            <div></div>
            <div>
              <button className="btn save-btn" onClick={updateNote}>
                Save
              </button>
              <button className="btn cancel-btn" onClick={cancelbtn}>
                Cancel
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
