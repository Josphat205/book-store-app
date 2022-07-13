import React from 'react';
import styled from 'styled-components';
import {useDispatch} from 'react-redux'
function Categories() {
  const dispatch = useDispatch()
  return (
    <Container>
      <h1>Categories will go here</h1>
      <Button type="button" onClick={()=>dispatch()}>Update Progress</Button>
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
const Button = styled.button`
  padding: 12px 15px;
  border-radius: 8px;
  background-color: blue;
  color: #fff;
  &:hover {
    background-color: #fff;
    border: 1px solid blue;
    color: blue;
    trasition: all 500ms ease;
  }
`;
export default Categories;
