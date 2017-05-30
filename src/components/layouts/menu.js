import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "../../tmp.css";

// Using "Stateless Functional Components"
export default function(props) {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <LinkContainer exact to="/" activeClassName="active">
            <a>React-Redux-Bootstrap</a>
          </LinkContainer>
        </Navbar.Brand>
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <LinkContainer to="/products" activeClassName="active">
            <NavItem eventKey={1} href="#">Products</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
