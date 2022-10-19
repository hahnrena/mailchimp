import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const CardWrapper = styled.div`
  display: grid;
  margin: 50px 0px 0px;
  grid-template-columns: 500px;
  grid-template-rows: 3ch auto minmax(10px, 60px);
  grid-template-areas: "image" "text";
  border-radius: 18px 18px 0px 0px;
  background: #dbd9d2;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
`;

export const CardTextWrapper = styled.div`
  grid-area: text;
  margin: 25px;
  display: flex;
  flex-direction: column;
`;

export const CardTextDate = styled.span`
  color: #f25f25;
  font-size: 13px;
  border-radius: 0px 0px 18px 18px;
  background-color: #b7a9a1;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  width: 500px;
  height: 40px;
  text-align: center;
`;

export const CardTextTitle = styled.h2`
  margin-top: 0px;
  font-size: 2rem;
  box-sizing: border-box;
  min-width: 0px;
  line-height: 1.2;
  margin: 0px;
  background: #241c15;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

export const DeleteButton = styled.button`
    width: 220px;
    height: 60px;
    margin: 20px;
    border-radius: 10rem;
    background-color: #fbeeca;
}
`