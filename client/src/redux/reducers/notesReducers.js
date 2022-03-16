export const getAllNotesReducer = (state = { notes: [] }, action) => {
  switch (action.type) {
    case "GET_ALL_NOTES_REGUEST":
      return {
        loading: true,
        ...state,
      };
    case "GET_ALL_NOTE_SUCCESS":
      return {
        loading: false,
        notes: action.payload,
      };
    case "GET_ALL_NOTE_FAILED":
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const addNewNoteReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_NEW_NOTE_REQUEST":
      return {
        loadingToAdd: true,
      };
    case "ADD_NEW_NOTE_SUCCESS":
      return {
        loadingToAdd: false,
        success: true,
      };
    case "ADD_NEW_NOTE_FAILED":
      return {
        loadingToAdd: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
