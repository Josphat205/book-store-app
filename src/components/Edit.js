import React from 'react'
import styled from 'styled-components';
function Edit() {
  return (
    <Container>
        <Head>Edit Book</Head>
    <Form>
    <Input  name='title' type="text" placeholder="Edit book here..." />
    <Input  name='author' type="text" placeholder="Edit author..." />
    <Input  name='category' type="text"  placeholder="Edit category..." />
    <Button type="submit">Update book</Button>
  </Form>
    </Container>
  )
}
const Head = styled.h2`
text-align:center;
font-size:28px;
`;
const Container = styled.div`
margin-top:20px;
`;
const Button = styled.button`
padding:10px 13px;
border-radius: 8px;
background-color: blue;
margin:10px;
display:block;
color:#fff;
&:hover{
  background-color: #fff;
  border:1px solid blue;
  color:blue;
  trasition: all 500ms ease;
}
`;
const Input = styled.input`
 padding:10px 15px;
 width:50%;
 margin:5px auto;
 border-radius: 5px;
 outline:none;
 border:1px solid blue;
 font-size: 18px;
`;


const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
`;
export default Edit
