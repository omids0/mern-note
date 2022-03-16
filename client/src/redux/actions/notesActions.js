import axios from "axios";

export const getAllNotesAction = () => async (dispatch) => {
  dispatch({ type: "GET_ALL_NOTES_REGUEST" });

  try {
    const response = await axios.get("/api/notes/getallnotes");
    dispatch({ type: "GET_ALL_NOTE_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_ALL_NOTE_FAILED", payload: error.message });
  }
};

export const addNewNoteAction = (note) => async (dispatch) => {
  dispatch({ type: "ADD_NEW_NOTE_REQUEST" });
  try {
    const response = await axios.post("api/notes/addnewnote", { note });
    window.location.href = "/";
    dispatch({ type: "ADD_NEW_NOTE_SUCCESS" });
  } catch (error) {
    dispatch({ type: "ADD_NEW_NOTE_FAILED", payload: error.message });
  }
};
