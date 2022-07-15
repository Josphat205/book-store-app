
import styled from 'styled-components';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook} from '../redux/books/books';
function FormInput() {
  const [state, setState] = useState({
    title: '',
    author: '',
    category: '',
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmition = (e) => {
    e.preventDefault()
    const {
      title, author, category,
    } = state;
    if (title.length && author.length  && category ) {
      dispatch(addBook({
        item_id: Math.floor(Math.random() * 10000), title, author, category,
      }));
    }
    state.title = '';
    state.author = '';
    state.category = '';
  };
  return (
    <Container>
      <Form onSubmit={handleSubmition}>
        <Input value={state.title} name='title' type="text" onChange={handleChange} placeholder="Add a book here..." />
        <Input value={state.author} name='author' type="text" onChange={handleChange} placeholder="Add author..." />
        <Input value={state.category} name='category' type="text" onChange={handleChange} placeholder="Add category..." />
        <Button type="submit">Add book</Button>
      </Form>
    </Container>
  );
}
const Button = styled.button`
padding:10px 13px;
border-radius: 8px;
background-color: blue;
margin-left:3px;
color:#fff;
&:hover{
  background-color: #fff;
  border:1px solid blue;
  color:blue;
  trasition: all 500ms ease;
}
`;
const Input = styled.input`
 padding:8px 15px;
 width:26%;
 border-radius: 5px;
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
