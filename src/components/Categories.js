import React from 'react';
import styled from 'styled-components';

function Categories() {
  return (
    <Container>
      <h1>Categories will go here</h1>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  margin:0 auto;
  position: relative;
  top: 10%;
  max-height: 70%;
  min-height: fit-content;
  padding: 10px;
  overflow-y: scroll;
`;
export default Categories;
