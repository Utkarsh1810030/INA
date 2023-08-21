import { FETCH_USER, FETCH_OPENAI_RESPONSE } from "../actions/types";

// state is made null to indicate that request has not yet fulfilled
export default function authReducer(state = null, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    case FETCH_OPENAI_RESPONSE:
      return {
        ...state,
        credits: action.payload.user.credits, // Update the credits
      };
    default:
      return state;
  }
}
