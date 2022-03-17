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

export const removeNoteAction = (id) => async (dispatch) => {
  dispatch({ type: "REMOVE_NOTE_REQUEST" });
  try {
    const response = await axios.post("/api/notes/removenote", { id });
    dispatch({ type: "REMOVE_NOTE_SUCCESS" });
    window.location.reload();
  } catch (error) {
    dispatch({ type: "REMOVE_NOTE_FAILED", payload: error.message });
  }
};

export const findNoteAction = (id) => async (dispatch) => {
  dispatch({ type: "FIND_NOTE_REQUEST" });
  try {
    const response = await axios.post("/api/notes/findnote", { id });
    dispatch({ type: "FIND_NOTE_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "FIND_NOTE_FAILED", payload: error.message });
  }
};

export const updateNoteAction = (id, updateNote) => async (dispatch) => {
  dispatch({ type: "UPDATE_NOTE_REQUEST" });
  try {
    const response = await axios.post("/api/notes/updatenote", {
      id,
      updateNote,
    });
    dispatch({ type: "UPDATE_NOTE_SUCCESS"});
    window.location.href = "/";
  } catch (error) {
    dispatch({ type: "UPDATE_NOTE_FAILED", payload: error.message });
  }
};
