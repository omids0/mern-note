import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  findNoteReducer,
  getAllNotesReducer,
  removeNoteReducer,
  updateNoteReducer,
} from "./reducers/notesReducers";

const finalReducer = combineReducers({
  getAllNotesReducer: getAllNotesReducer,
  removeNoteReducer: removeNoteReducer,
  findNoteReducer: findNoteReducer,
  updateNoteReducer: updateNoteReducer,
});

const initialState = {};

const composeEnhancers = composeWithDevTools({});

const store = createStore(
  finalReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
