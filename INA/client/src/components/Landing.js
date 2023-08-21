import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@nextui-org/react";
import * as actions from '../actions';
import { connect } from "react-redux";

const Landing = (props) => {
  return (
    <div>
      <div className=" flex flex-col space-y-8 h-screen items-center pt-40">
        <h1 className="flowing-heading font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
        Welcome to Intelligent Node Application
        </h1>
        {!props.auth?<p className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 text-white-100">
          To Continue, please Login!
        </p>:<></>}
        <div>
        <Link to={props.auth ? "/dashboard" : "/"}>
          <Button className={props.auth ?"":"hidden"} color="primary" variant="ghost">Go to Dashboard</Button>
        </Link>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state){
  return {
    auth: state.auth
  }
}

export default connect( mapStateToProps ,actions)(Landing)