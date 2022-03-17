import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewNoteAction } from "../redux/actions/notesActions";

export default function Newnote() {
  const [title, settitle] = useState("");
  const [body, setbody] = useState("");
  const dispatch = useDispatch();

  const saveNote = () => {
    const note = {
      title,
      body,
    };
    if (body) {
      dispatch(addNewNoteAction(note));
      window.location.href = '/'
    } else {
      alert("Body is empty");
    }
  };

  return (
    <div className="newnote">
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
          <div>
          </div>
          <div>
            <button className="btn save-btn" onClick={saveNote}>Save</button>
            <button className="btn cancel-btn">Cancel</button>
          </div>
        </div>
      </form>
    </div>
  );
}
