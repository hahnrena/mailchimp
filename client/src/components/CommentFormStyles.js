import styled from "styled-components";

export const NameTitle = styled.h2`
color: #ffe01b;
text-align: center;
`

export const NameTextArea = styled.textarea`
    justify-self: center; 
    margin-bottom: 30px;
    width: 300px;
    box-sizing: border-box;
  border: 3px solid #241c15;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;
  &:focus {
    border: 3px solid #f25f25;
}
`
export const CommentTextArea = styled.textarea`
    justify-self: center; 
    margin-bottom: 30px;
    width: 300px;
    
    box-sizing: border-box;
  border: 3px solid #241c15;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;
  &:focus {
    border: 3px solid #f25f25;
}
`

export const CommentButton = styled.button`
width: 220px;
border-radius: 10rem;
background-color: #ffe01b;
justify-self: center;
box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
`