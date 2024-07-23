import React, { useState } from 'react'
import image from '../assets/computer-science-degree-3919524-3246795.png'
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom'




// import Center from '../components/Center'

const Homepage = () => {
  
  const [cid,setCertiId] = useState('');

  const navigate=useNavigate();
  const searchCertificate=()=>{
    navigate(`/certificate/${cid}`)
  }


  return (
    <>

      <div className="flex flex-col items-center h-screen justify-center">
          <h1 className="font-extrabold text-3xl mb-7">Certificate DApp</h1>
          <div className="pb-4">
            <img src={image} width="200" height="200" />
          </div>
          <input type="text" id="certid" name="certid" className="border-2 border-zinc-950 mb-2"  value={cid} onChange={(e)=>setCertiId(e.target.value)} placeholder="Enter Certificate ID to View" />
          <button className="border-1 bg-cyan-700 px-8 py-4 rounded text-white"  onClick={searchCertificate}>
            Search
          </button>
      </div>
    </>
  )
}

export default Homepage
