
import React, {useState, useEffect} from 'react'
import {ReactNotifications}  from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'


import CommentForm from './CommentForm'
import CommentList from './comment-forms/CommentList'

const App = () => {
  const [info, updateInfo] = useState([]);

  const addInfo = (formData) => {
    updateInfo([...info, formData]);
  };


  return (
    <div className="App">
      <ReactNotifications />
      <CommentForm  addInfo={addInfo} />
      <CommentList addInfo={addInfo}/>
      
    </div>
  );
  
}

export default App;
