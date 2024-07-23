import React, { useState } from 'react'
import {toast} from 'react-toastify'
// import { Link } from 'react-router-dom'

const IssueCertificate = () => {

  const [certid,setId]=useState('')
  const [cname,setCname]=useState('')
  const [course,setCourse]=useState('Certified Blockchain Associate')
  const [grade,setGrade]=useState('S')
  const [date,setDate]=useState('')
// const navigate=useNavigate();


const submitForm=(e)=>{
  e.preventDefault()
  const  newCertificate={
    certid,cname,course,grade,date   //converting to object
  }

  const res= addCertificate(newCertificate)
  toast.success('New certificate issued')
  
}
  const addCertificate=async(newCertificate)=>{
    const res=await fetch('/api/certificate',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',

      },
      body:JSON.stringify(newCertificate)
    })
    return res;
  }


  return (
  <>
  <div >
      <h3 className="text-center text-3xl font-bold mb-4">Issue New Certificate</h3>
    <div className="flex flex-col justify-center items-center ">
      <form  onSubmit={submitForm}>
        <div className="border-2 rounded px-20" >
          <div className="p-2">
          <label className="block " htmlFor="courseName">Select Course *</label>
          <select className="border-2 border-black" name="course" id="courseName"
           value={course}
           onChange={(e)=>setCourse(e.target.value)}>
            <option>Certified Blockchain Associate</option>
            <option>Certified Ethereum Developer</option>
            <option>Blockchain Foundation</option>
            <option>Ethereum Fundamentals</option>
          </select>
        </div>

        <div className="p-2">
          <label className="block" htmlFor="certificateID">Certificate ID *</label>
          <input type="text" className="border-2 border-black" name="certid" id="certificateID" placeholder="Certificate ID" required 
          value={certid}
          onChange={(e)=>setId(e.target.value)}
          />
        </div>
        <div className="p-2">
          <label className="block" htmlFor="candidateName">Candidate name *</label>
          <input type="text" className="border-2 border-black" name="cname" id="candidateName" placeholder="Name" required value={cname}
          onChange={(e)=>setCname(e.target.value)} />
        </div>
        <div className=" p-2">
          <label className="block" htmlFor="grade">Select Grade *</label>
          <select className="border-2 border-black" id="grade" name="grade" value={grade}
          onChange={(e)=>setGrade(e.target.value)} >
            <option>S</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
          </select>
        </div>
        <div className="p-2">
          <label className="block" htmlFor="date">Issue Date *</label>
          <input  className="border-2 border-black"type="date" id="date" name="date" required value={date}
          onChange={(e)=>setDate(e.target.value)} />
        </div>
     {/* <Link to='/view'>  */}
      <button type="submit" className="border-2 bg-blue-700 hover:bg-blue-400 mt-6 ml-10 h-8 w-[80%] font-bold text-white " >Issue Certificate</button>
      {/* </Link> */}
       </div>
       </form>
      </div>
      
    </div>
  
  </>
  )
}

export default IssueCertificate
