
import React ,{useState}from "react";
import './../styles/App.css';
// import { useCallback, useState } from "react/cjs/react.production.min";
import { useDispatch,useSelector } from "react-redux";
import { updateName,updateEmail } from "./Action";

const App = () => {
   const dispatch = useDispatch();
   const {name,email} = useSelector((state)=>state.user)
  const[nameInput,setNameInput] = useState('');
  const[emailInput,setEmailInput] = useState('')
 
    const handleNameChange = (e)=>{
      const newName = e.target.value;
       setNameInput(newName);
       dispatch(updateName(newName));
    }

    const handleEmailChange = (e)=>{
      const newEmail = e.target.value;
      setEmailInput(newEmail);
      dispatch(updateEmail(newEmail));
    }

  return (
    <div>
        {/* Do not remove the main div */}
        <label>
          Name:
          <input 
          type = "text"
          value = {nameInput} 
          onChange = {handleNameChange}
          placeholder = "Enter name"
          />

        </label>

        <label>
         Email:
          <input 
          type = "text"
          value = {emailInput} 
          onChange = {handleEmailChange}
          placeholder = "Enter Email"
          />

        </label>

        <h2>Current values in store:</h2>
        <p>Name - {name}</p>
        <p>Email - {email}</p>
    </div>
  )
}

export default App
