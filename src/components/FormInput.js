
import styled from 'styled-components';
import {useDispatch } from 'react-redux'
import { useState } from 'react';
import {addBook} from '../redux/books/books'
function FormInput() {
  const [name , setName] = useState("")
  const [option , setOption] = useState("")
  const dispatch = useDispatch()
  const handleSubmit = (e)=>{
   e.preventDefault();
  }
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Add a book here..." />
        <Select id="book" name="book">
          <Option onChange={(e)=>setOption(e.target.value)} value="classic">Classic</Option>
          <Option onChange={(e)=>setOption(e.target.value)} value="comic">Comic</Option>
          <Option onChange={(e)=>setOption(e.target.value)} value="action">Action</Option>
        </Select>
        <Button type="submit" onClick={()=>dispatch(addBook({id:Math.floor(Math.random() * 100), name, option}))}>Add book</Button>
      </Form>
    </Container>
  );
}
const Button = styled.button`
padding:12px 15px;
border-radius: 8px;
background-color: blue;
color:#fff;
&:hover{
  background-color: #fff;
  border:1px solid blue;
  color:blue;
  trasition: all 500ms ease;
}
`;
const Option = styled.option`
border-radius: 10px;
border:1px solid blue;
`;
const Input = styled.input`
 padding:10px 20px;
 width:50%;
 border-radius: 10px;
 outline:none;
 border:1px solid blue;
 font-size: 18px;
`;
const Select = styled.select`
 padding:10px 20px;
 width:30%;
 border-radius: 10px;
 outline:none;
 border:1px solid blue;
 font-size: 18px;
`;
const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  border-radius: 3px;
  background: #e0e0e0;
  box-shadow: 26px 26px 51px #d3d3d3, -26px -26px 51px #ededed;
`;
export default FormInput;
