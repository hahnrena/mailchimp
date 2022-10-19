import React, {useEffect, useState} from 'react'
import axios from 'axios'
import moment from 'moment'
import {
  CardContainer,
  CardWrapper,
  CardTextWrapper,
  CardTextDate,
  CardTextTitle,
  DeleteButton
} from "./CommentListStyle";

export default function CommentList({addInfo}) {
const [allComments, setAllComments] = useState([])
const api = axios.create({
  baseURL: "/api"
})

const fetchData = async () => {
  const response = await api.get('/getComments')
    setAllComments(await response.data)
    console.log(response.data)
}
  useEffect(() => {
    fetchData()
  }, [addInfo])

const handleDelete = () => {
  try{api.delete('/deleteComments').then((response) => {
    setAllComments([])    
  })} catch(err){
    if (err.response) {
      alert('Error -- Server issues!')
  }
  }
}

const newAllComments = allComments.map(obj => {
  if(obj.created){
    const convertedTimeStamp = new Date(Date.parse(obj.created.replace(/[-]/g,'/'))).toString();

    const date = moment(convertedTimeStamp).format('MMM DD')
    const time = moment(convertedTimeStamp).format('h:mm A')
    
    return {...obj, created: `${date} at ${time}`};
  }
  return obj
})

  return (
    <CardContainer>
      {newAllComments.map((elem) => (
        <><CardWrapper key={elem.id}>
          <CardTextWrapper>
          <CardTextTitle>{elem.message}</CardTextTitle>
          
          </CardTextWrapper> 
          
        </CardWrapper>
        <CardTextDate>{elem.name} at {elem.created}</CardTextDate></>  
      ))}
      {newAllComments.length !==0 && <DeleteButton data-testref="deleteButton" onClick={handleDelete}>Delete All</DeleteButton>}
    </CardContainer>
  );
}