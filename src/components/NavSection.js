import React from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

function NavSection() {
  return (
    <Container>
      <Nav>
        <NavBar>
          <H1>BooksStore</H1>
          <Ul>
            <NavLinks to="/">Books</NavLinks>
            <NavLinks to="categories">Categories</NavLinks>
          </Ul>
        </NavBar>
        <Avatar />
      </Nav>
    </Container>
  );
}
const H1 = styled.h1`
font-size:30px;
color:blue;
cursor:pointer;
`;
const NavLinks = styled(NavLink)`
 text-decoration:none;
 padding-right:20px;
 color:#000;
 font-size:22px;
 cursor:pointer;
 &:hover{
  color:black;
  transition: all 400ms ease;
  font-weight:bold;
 }
`;
const Ul = styled.ul`
display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Avatar = styled(BsPersonCircle)`
 font-size:30px;
 color:blue;
 margin-right:13px;
 cursor:pointer;
`;
const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 10px;
  height: 60px;
  background: #ffffff;
  box-shadow: -5px 11px 38px -19px rgba(0,0,0,0.3);
  justify-content: center;
  align-items: center;
`;
const Nav = styled.nav`
  margin:0 5px;
  display: flex;
  height:60px;
  justify-content: space-between;
  align-items: center;
`;
const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export default NavSection;
