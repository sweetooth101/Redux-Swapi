import { FETCHING, SUCCESS, FAILURE} from "../actions";
const initialState = {
  characters: [],
  fatching: false,
  error: null
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return{...state, fetching: true};
    case SUCCESS:
      return Object.assign({}, state, {
        characters: action.payload,
        fetching: false,
        error: null
      })
    case FAILURE:
      return{...state, loading: false, error: action.payload}
  
    default:
      return state;
  }
};
