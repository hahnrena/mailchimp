import React, { useState } from "react";
import { Store } from 'react-notifications-component'
import axios from 'axios'
import 'animate.css';

import {
  NameTitle,
  NameTextarea,
  CommentTextarea,
  CommentButton
} from "./CommentFormStyles";


const CommentForm = ({addInfo}) => {
    const [formData, setFormData] = useState({
        name: "",
        comment: ""
      });

      const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
      };

      const handleSubmit = async (event) => {
          event.preventDefault()
          addInfo(formData)
          
          const api = axios.create({
            baseURL: "/api"
          })
          
          try {api.post('/createComment', { name: formData.name, message: formData.comment }).then((response) => {
            setFormData(response.data);
            
          })} catch(err){
            if (err.response) {
              alert(err.response.data)
          }
          }

          Store.addNotification({ title: "New Comment", message: `${formData.name} added a new comment`, type: 'success', container: 'top-right', insert: 'top', animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 5000,
            onScreen: true
          }})
          
      }

       
    
    return (
        <div>
            <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '100%' }} data-testref="submitButton" onSubmit={handleSubmit}>
                <NameTitle>Name</NameTitle>
                <NameTextarea required type="text" placeholder="Name" name="name" onChange={handleChange} />
                <CommentTextarea required type="text" placeholder="Comment" name="comment" onChange={handleChange} />
                <CommentButton data-testref="deleteButton">Comment</CommentButton>
            </form>
        </div>
    )
}

export default CommentForm;