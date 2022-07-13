
import styled from 'styled-components';
import {useDispatch } from 'react-redux'
import { useState } from 'react';
import {addBook} from '../redux/books/books'
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
function FormInput() {
  const [values , setValues] = useState({
    id:Math.floor(Math.random() * 100),
    chapter:0,
    book:'',
    author:''
  })
  const books = useSelector((state) => state.myStore.books)
  const Title = books.find((item) => item.book === values.book)
  const dispatch = useDispatch()
  const handleSubmit = (e)=>{
   e.preventDefault();
   if(!values.book || !values.author){
     return toast.warning('please fill all fields')
   }
   if(Title){
    return toast.error('The book Exist')
   }
    setValues({book : "",author :""})
   const {id, book, author} = values;
   dispatch(addBook({
    id,
    chapter:book.length,
    book,
    author
   }))
  }
  return (
    <Container>
      <Form  onSubmit={handleSubmit}>
      <Input type="text" value={values.book} onChange={(e)=>setValues({...values, book : e.target.value})} placeholder="Add a book here..." />
      <Input type="text" value={values.author} onChange={(e)=>setValues({...values, author : e.target.value})} placeholder="Add author..." />
        <Button type="submit">Add book</Button>
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

const Input = styled.input`
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
