import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  Badge,
} from "@nextui-org/react";

import Payments from "./Payment";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <NavbarItem>
            <a href="/auth/google" className="loginBtn">
              Login with google
            </a>
          </NavbarItem>
        );
      default:
        return [
          <NavbarContent className="hidden sm:flex gap-4" justify="center " key={1}>
            <NavbarItem>
              <div className="container flex pr-5">
                <p className="pr-5 font-medium">Credits: </p>
                <Badge className="mt-3" color="danger" content={this.props.auth.credits} shape="circle"></Badge>
              </div>
            </NavbarItem>
          </NavbarContent>,
          <NavbarContent className="hidden sm:flex gap-2" justify="end" key={2}>
            <NavbarItem>
              <Payments/>
            </NavbarItem>
            <NavbarItem>
              <Button
                radius="full"
                className="text-lg text-amber-600"
                color="warning"
                variant="ghost"
                key={3}
              >
                <a href="/api/logout">Logout</a>
              </Button>
            </NavbarItem>
          </NavbarContent>,
        ];
    }
  }
  render() {
    return (
      <Navbar position="static">
          <NavbarBrand>
            <Link className="font-bold text-4xl tracking-wider " to={this.props.auth ? "/landing" : "/"}>
              INA
            </Link> 
          </NavbarBrand>
        {this.renderContent()}
      </Navbar>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    openai:state.openai
  };
}

export default connect(mapStateToProps)(Header);
