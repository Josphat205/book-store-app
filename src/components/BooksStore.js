import React from 'react';
import styled from 'styled-components';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Books from './Books';
import NavSection from './NavSection';
import Categories from './Categories';
import Edit from './Edit';


function BooksStore() {
  return (
    <Container>
      <NavSection />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/edit" element={<Edit/>} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </Container>
  );
}

const Container = styled.div`
  padding: 0;
  width: 90%;
  margin: 0 auto;
  border-radius: 10px;
  background: #faf9f9;
  box-shadow: 20px 20px 60px #cacaca, -20px -20px 60px #f6f6f6;
`;

export default BooksStore;
