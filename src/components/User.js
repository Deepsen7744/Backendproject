import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Pdf='http://localhost:3000/Deepsen.pdf';

const User = (prop) => {
  const downloadFileAtURL =(url)=>{
    const fileName=url.split('/').pop()
    const aTag= document.createElement('a');
    aTag.href=url;
    aTag.setAttribute('download',fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
    
  }


  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
    registrationNumber: '',
    course: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    prop.setRegisteru(true);
  };

  const notify = () => toast("File Downloaded");


  return (
    <div>
    {
      prop.registeru? (
        <div>
        <h1  className=' flex justify-center   items-center class="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r  from-blue-700 to-pink-600"'>Student portal </h1>
        <section className="py-14">
    <div className="max-w-screen-xl mx-auto px-4  gap-x-12 justify-between md:flex md:px-8">
      
        {/* <div className="max-w-xl">
            <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            { prop.foruser? (<p></p>) : (<div><p>applied in {formData.registrationNumber} for course {formData.course}</p></div>) }
            </h3>
            <p className="mt-3 text-gray-600">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>

        </div> */}

        
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className=' object-cover  w-[100%] h-[30vh]' src="https://images.pexels.com/photos/4050287/pexels-photo-4050287.jpeg" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{ prop.foruser? (<p></p>) : (<div><p>Applied in {formData.registrationNumber} for course {formData.course}</p></div>) }</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">MCA stands for Master of Computer Applications. It is a postgraduate degree program in the field of computer science and information technology. Here's a brief description of the MCA course:.</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>

        <div className="flex-none mt-4 md:mt-0">
            <a 
        download="Example-PDF-document"
        target="_blank"
        rel="noreferrer"   className="inline-block py-2 px-4 text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-md hover:shadow-none">
              <button onClick={()=>{downloadFileAtURL(Pdf)}}>Download Certificate</button>
            </a>
        </div>
    </div>
</section>
        {/* <div className=' flex w-[100%] h-[100vh]  bg-red-500'> 
           
           
         <div className=' bg-fuchsia-400 flex  flex-col   w-[830px] '>
           <h2 className='text-4xl font-bold text-blue-600 neon-text text-center px-4 py-6' >Applications for certificate</h2>
        <div>{ prop.foruser? (<p></p>) : (<div><p>applied in {formData.registrationNumber} for course {formData.course}</p></div>) }</div>
         </div>
       
        <h2>My Certificates</h2>
        <div>{ !prop.foruser? (<p></p>) : (<div><p>{formData.registrationNumber} for {formData.course}</p><button onClick={notify}>download</button><ToastContainer /></div>) }</div>
        </div> */}
        </div>
      ) : (
        <div class="h-screen md:flex ">
	<div
		class="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden">
		<div>
			<h1 class="text-white font-bold text-4xl font-sans">Doc-Verification</h1>
			<p class="text-white mt-1">Doc-Verification is the fundamental right for all student</p>
			<button type="submit" class="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2">Read More</button>
		</div>
		<div class="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div class="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div class="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div class="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
	</div>
	<div class="flex md:w-1/2 justify-center py-10 items-center bg-white">
		<form class="bg-white" onSubmit={handleSubmit}>
			<h1 class="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
			<p class="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>
			<div className='form-group' class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
					fill="currentColor">
					<path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
						clip-rule="evenodd" />
				</svg>
				<label htmlFor="name">Name:</label>
          <input class="pl-2 outline-none border-none"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
      </div>
				<div className='form-group' class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none"
						viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
							d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
					</svg>
          <label htmlFor="address">Address:</label>
          <input  class="pl-2 outline-none border-none"
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
      </div>
					<div className='form-group' class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none"
							viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
								d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
						</svg>
            <label htmlFor="phone">Phone:</label>
          <input class="pl-2 outline-none border-none"
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          /> 
      </div>
						<div className='form-group'  class="flex items-center border-2 py-2 px-3 rounded-2xl">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
								fill="currentColor">
								<path fill-rule="evenodd"
									d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
									clip-rule="evenodd" />
							</svg>
							<label htmlFor="email">Email:</label>
          <input  class="pl-2 outline-none border-none"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
      </div>
      <div className='form-group'  class="flex items-center border-2 py-2 px-3 rounded-2xl mt-5 ">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
								fill="currentColor">
								<path fill-rule="evenodd"
									d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
									clip-rule="evenodd" />
							</svg>
              <label htmlFor="registrationNumber">Institute Name:</label>
          <input  class="pl-2 outline-none border-none"
            type="text"
            id="registrationNumber"
            name="registrationNumber"
            value={formData.registrationNumber}
            onChange={handleChange}
            required
          />
      </div>
      <div className='form-group'  class="flex items-center border-2 py-2 px-3 rounded-2xl mt-5">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
								fill="currentColor">
								<path fill-rule="evenodd"
									d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
									clip-rule="evenodd" />
							</svg>
              <label htmlFor="course">Course:</label>
          <input  class="pl-2 outline-none border-none"
            type="course"
            id="course"
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
          />
      </div>
							<button type="submit" class="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Login</button>
							<span class="text-sm ml-2 hover:text-blue-500 cursor-pointer">Forgot Password ?</span>
		</form>
	</div>
</div>
      )
    }
    </div>
  )
}

export default User