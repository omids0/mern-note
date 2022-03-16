import React, { useState } from "react";

export default function Newnote() {
  const [title, settitle] = useState("");
  const [body, setbody] = useState("");

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
            <button className='btn remove-btn'>Remove</button>
          </div>
          <div>
            <button className='btn save-btn'>Save</button>
            <button className='btn cancel-btn'>Cancel</button>
          </div>
        </div>
      </form>
    </div>
  );
}
