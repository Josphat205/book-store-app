import {useState} from 'react';
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux'
import { checkStatus } from '../redux/categories/categories';
function Categories() {
  const [showStatus, setShowStatus]= useState(false)
  const dispatch = useDispatch()
  const cat = useSelector((state)=>state.myCategories)
  const handleCheckStatus = ()=>{
    dispatch(checkStatus())
    setShowStatus(true)
  }
  return (
    <Container>
      <h1>Categories will go here</h1>
      <div>{showStatus ? cat : ""}</div>
      <Button type="button" onClick={handleCheckStatus}>Update Progress</Button>
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
