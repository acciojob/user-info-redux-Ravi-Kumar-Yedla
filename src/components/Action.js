 
    //Action types
 export const UPDATE_NAME = 'UPDATE_NAME';
  export const UPDATE_EMAIL = 'UPDATE_EMAIL';

  //Action creator to update name
  export const updateName = (name)=> ({
    type:UPDATE_NAME,
    payload:name,
  })
 
    
  //Action creator to update email

  export const updateEmail = (email) =>({
   type: UPDATE_EMAIL,
   payload:email,
})