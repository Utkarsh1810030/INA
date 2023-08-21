import axios from 'axios'
import {FETCH_OPENAI_RESPONSE, FETCH_USER} from './types'

export const fetchUser = ()=> async dispatch=>{
        const response = await axios.get('/api/current_user')
        dispatch({type: FETCH_USER , payload: response.data})
    }

export const handleToken = token => async dispatch => {
    const response = await axios.post('/api/stripe', token);
    dispatch({type: FETCH_USER , payload: response.data})
}

export const openAiResponse = message=>async dispatch => {
    const response = await axios.post('/api/completions' , {message})
    console.log(response)
    dispatch({type: FETCH_OPENAI_RESPONSE, payload:response.data})
    dispatch({ type: FETCH_USER, payload: response.data.user });
}

