
import styled from "styled-components";
import { CircularProgressbar } from "react-circular-progressbar";
import FormInput from "./FormInput";
import "react-circular-progressbar/dist/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteBook,fetchBooks} from "../redux/books/books";
function Books() {
  const percentage = 90;
  const books = useSelector((state) => state.groupBooks.books);
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(fetchBooks())
  },[])
  return (
    <Container>
      <BooksList>
      {
            Object.keys(books).map((item,index) => {
                return(
                  <Book key={index}> 
              <div>
                <Titles>
                  <h2>{books[item][0].title}</h2>
                  <Small>{books[item][0].author}</Small>
                </Titles>
                <Editing>
                  <Span>comments</Span>
                  <Hr />
                  <Span onClick={()=>dispatch(deleteBook(item))}>
                    Remove
                  </Span>
                  <Hr />
                  <Span>Edit</Span>
                </Editing>
              </div>
              <Chapters>
                <Bar style={{ width: 130, height: 130 }}>
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                  />
                </Bar>
                <Titles>
                  <H4>CURRENT CHAPTER</H4>
                  <h3>{books[item][0].category}</h3>
                  <Button type="button">Update Progress</Button>
                </Titles>
              </Chapters>
            </Book>
                )
            })
        }  
            
      </BooksList>
      <Footer>
        <FormInput />
      </Footer>
    </Container>
  );
}
const Footer = styled.div`
  bottom: 10px;
  margin-top: 20px;
  width: 100%;
  backdrop-filter: blur(30px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: grey;
`;
const Small = styled.small`
  opacity: 0.6;
`;
const H4 = styled.h4`
  opacity: 0.6;
`;
const Bar = styled.div`
  margin: 0 50px;
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
const Chapters = styled.div`
  font-family: "Gentium Book Plus", serif;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 30px;
`;
const Hr = styled.hr`
  border: 0;
  margin: 0;
  border: 2px solid black;
  height: 15px;
`;
const Span = styled.span`
  font-size: 17px;
  font-family: "Oswald", sans-serif;
  font-weight: 300;
  margin: 0 10px;
  cursor: pointer;
  &:hover {
    color: blue;
  }
`;
const Titles = styled.div`
  display: flex;
  font-family: "Gentium Book Plus", serif;
  font-weight: 400;
  flex-direction: column;
  margin-right: 10px;
  padding: 0;
  justify-content: flex-start;
  line-height: 1px;
`;
const Editing = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const Book = styled.div`
  width: 90%;
  margin: 3px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid blue;
  padding: 10px;
`;
const BooksList = styled.div`
  width: 100%;
  margin: 0 auto;
  display: block;
  max-height: 70%;
  min-height: fit-content;
  padding: 10px;
`;
const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  position: relative;
  top: 10%;
`;
export default Books;
