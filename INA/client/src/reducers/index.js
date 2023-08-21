import { combineReducers } from "redux";

import authReducer from "./authReducer";
import openAiReducer from "./openaiReducer";

export default combineReducers({
    auth: authReducer,
    openai: openAiReducer
})