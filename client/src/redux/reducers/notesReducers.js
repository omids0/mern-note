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

export const removeNoteReducer = (state = {}, action) => {
  switch (action.type) {
    case "REMOVE_NOTE_REQUEST":
      return {
        loadingremove: true,
      };
    case "REMOVE_NOTE_SUCCESS":
      return {
        loadingremove: false,
      };
    case "REMOVE_NOTE_FAILED":
      return {
        loadingremove: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const findNoteReducer = (state = {}, action) => {
  switch (action.type) {
    case "FIND_NOTE_REQUEST":
      return {
        loadingFinding: true,
      };
    case "FIND_NOTE_SUCCESS":
      return {
        loadingFinding: false,
        note: action.payload,
      };
    case "FIND_NOTE_FAILED":
      return {
        loadingFinding: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const updateNoteReducer = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_NOTE_REQUEST":
      return {
        loadingUpdate: true,
      };
    case "UPDATE_NOTE_SUCCESS":
      return {
        loadingUpdate: false,
        note: action.payload,
      };
    case "UPDATE_NOTE_FAILED":
      return {
        loadingUpdate: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
