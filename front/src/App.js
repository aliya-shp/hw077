import React from 'react';
import {Container, Nav, Navbar, NavbarBrand, NavItem, NavLink} from "reactstrap";
import {NavLink as RouterNavLink, Route, Switch} from 'react-router-dom';
import Posts from "./containers/Posts/Posts";
import NewPost from "./containers/NewPost/NewPost";

function App() {
  return (
    <>
      <Navbar color="light" light>
        <NavbarBrand tag={RouterNavLink} to="/">Posts</NavbarBrand>
        <Nav className="float-right" navbar>
          <NavItem>
            <NavLink tag={RouterNavLink} to="/posts/new">New post</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
      <Container>
        <Switch>
          <Route path="/" exact component={Posts}/>
          <Route path="/posts/new" exact component={NewPost}/>
        </Switch>
      </Container>
    </>
  );
}

export default App;
