import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllNotesAction } from "../redux/actions/notesActions";

export default function Homepage() {
  const dispatch = useDispatch();
  const notesState = useSelector(state => state.getAllNotesReducer)
  const { loading, error, notes } = notesState;

  useEffect(() => {
    dispatch(getAllNotesAction());
  }, []);
  console.log(error);
  return (
    <div className="homepage">
        {loading ? (
          <h3>Loading...</h3>
        ) : error ? (
          <h3>Something went wrong.</h3>
        ) : (
          notes.map((note) => (
            <div className="note">
              <h2>{note.title}</h2>
              <hr />
              <p>{note.body}</p>
            </div>
          ))
          )}
          {notes && notes.length < 1 && (<h3>You don't have any Note to show...</h3>)}
    </div>
  );
}
