import React,{useState, useEffect} from "react";
import { connect } from "react-redux";
import {Textarea, Button, CircularProgress} from "@nextui-org/react";
import * as actions from '../actions';

const DashBoard = (props)=>{
    const [inputValue, setInputValue] = React.useState("");
    const [loading, setLoading] = useState(false);
    const [responseValue, setResponseValue] = useState(null);
    const [error , setError] = useState(false)
    const [errorVal , setErrorVal] = useState("");

    useEffect(() => {
        if (props.openai?.data?.choices?.length > 0) {
            const openaiResponse = props.openai.data.choices[0]?.message?.content;
            if (openaiResponse) {
                setResponseValue(openaiResponse);
            }
            setLoading(false);
        }
    }, [props]);

    const handleSubmit =async () => {
        debugger
        if (inputValue && props.auth.credits> 0) {
            setLoading(true);
            setError(false);
            setErrorVal("")
            await props.openAiResponse(inputValue);
            setInputValue("");
        }else{
            setError(true);
            if(inputValue.length < 1) 
            setErrorVal("The input prompt cannot be empty")
            if(props.auth.credits === 0)
            setErrorVal("Quota Limit Reached. Kindly Recharge!")
            else
            setErrorVal("Some Error occured. Try again")
        }
    };


    return(
        <div className="md:container md:mx-auto" >
            <Textarea
                label="Enter the prompt you want to search"
                labelPlacement="outside"
                placeholder="Enter your description"
                value={inputValue}
                onValueChange={setInputValue}
                variant="bordered"
                className="md:mx-auto p-10"
                size="lg"
            />
            <div className="container flex justify-center md:mx-auto items-center">
            <Button color= "primary" variant="ghost" onClick={handleSubmit}>
                Submit
            </Button>
            </div>
            <div className="container flex justify-center pt-5">
            {!error?loading ? (
                    <CircularProgress size="small" aria-label="Loading..." />
                ) : (
                    responseValue && (
                        <Textarea
                            label="OpenAI Response"
                            labelPlacement="outside"
                            placeholder="OpenAI response"
                            className="max-w-xl"
                            size="lg"
                            value={responseValue}
                            readOnly
                        />
                    )
                ):<div>{errorVal}</div>}
            </div>
        </div>
    )
}

function mapStateToProps(state){
    console.log(state)
    return{
        openai: state.openai,
        auth:state.auth
    }
}

export default connect(mapStateToProps,actions)(DashBoard)