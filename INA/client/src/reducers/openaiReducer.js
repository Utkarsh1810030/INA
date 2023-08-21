import { FETCH_OPENAI_RESPONSE } from "../actions/types"

export default function openAiReducer(state = {}, action){
    console.log(action.payload)
    switch(action.type){
        case FETCH_OPENAI_RESPONSE:
            return action.payload;
        default:
            return state
    }
}