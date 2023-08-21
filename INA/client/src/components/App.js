import React, {useEffect} from "react";
import { BrowserRouter, Route} from "react-router-dom"
import { connect } from "react-redux";
import * as actions from '../actions'
import {NextUIProvider} from "@nextui-org/react";

import Header from "./header";
import DashBoard from "./Dashboard";
import Landing  from "./Landing";

const SurveyNew  = () => <h2>SurveyNew</h2>

const App = (props) => {
    useEffect(()=>{
        props.fetchUser()
    },[])
    return (
        <NextUIProvider>
           <BrowserRouter>
           <div className="purple-dark text-foreground bg-background overflow-hidden h-screen">
            <Header/>
            <Route exact path= '/' component = {Landing}/>
            <Route exact path= '/landing' component = {Landing}/>
            <Route exact path= '/dashboard' component = {DashBoard}/>
            <Route path= '/surveys/new' component = {SurveyNew}/>
           </div>
           </BrowserRouter>
        </NextUIProvider>
    )
}

// 1st argument of connect is mapStateToProps , 2nd is all the differnt action creators we want to wire up

export default connect(null, actions)(App);

// onece we pass all the actions to th connect they are passed to App as props