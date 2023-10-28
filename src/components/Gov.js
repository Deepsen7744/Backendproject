import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Gov = () => {

  const [approve,setApprove] = useState(false);

  function apv(){
    setApprove(!approve);
  }

  return (
    <div>
      <h2>Applications of Institue Registration</h2>
        <div>{ approve? (<p></p>) : (<div><p>Institure Regitration Form</p><button onClick={apv}>Approve</button></div>) }</div>
        <h2>Registered Institure</h2>
        <div>{ !approve? (<p></p>) : (<div><p>Institute Name</p></div>) }</div>
    </div>
  )
}

export default Gov