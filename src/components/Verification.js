import React, { useState } from 'react'
import scan from "../Images/scanner.gif"
import tick from "../Images/icons8-tick.gif"
import { ToastContainer , toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Verification()
{

const [submit,setSubmit]= useState(false);

const handleSubmit=(e)=>
{
    e.preventDefault();
    setSubmit(true);
}

const notify1 = () =>{
        toast.success('Documents Uploaded ', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000, // Auto close the notification after 3 seconds
        });
    }

  return (
    <div>
        {
            submit ? (<div>
            <div className='flex justify-center items-center '>
                <img src={tick} className='w-[200px] h-[200px] mt-24'/>
            </div>
            <div className='flex justify-center items-center text-9xl'>Verified</div></div>)
             :
              (
                <div>
                <div className='text-center'>
            <h1 className="text-4xl text-black mt-24">Upload Document to Scan</h1>
        </div>
        <div className='flex justify-center mt-10'>
           <img src={scan} className='w-[300px] h-[300px]'/>
        </div>
        <div className='flex justify-center gap-7'>
        <button className="bg-blue-500 hover:bg-blue-700 text-white text-lg font-bold py-2 px-4 rounded" onClick={notify1}>Upload</button>
        <ToastContainer />
        <button className="bg-blue-500 hover:bg-blue-700 text-white text-lg font-bold py-2 px-4 rounded" onClick={handleSubmit}>Submit</button>
        <ToastContainer />
        </div>
        </div>)
        }
    </div>
  )
}
export default Verification