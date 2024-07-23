import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

// const ViewCertificate = () => {

//  const {id}= useParams();
//  const [certi,setCertificate]=useState();

//  useEffect(()=>{
//   const getcerticifate=async()=>{
//     const res=await fetch(`http://api:5000/api/certificate/${id}`);
   
//     const data=await res.json();
//     // console.log(data);
//     setCertificate(data)
    
//   }
//   getcerticifate();
//  },[id])


//  if(!certi){
//   return <h3>Loading</h3>
//  }

const ViewCertificate = () => {
  const { id } = useParams();
  const [certi, setCertificate] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCertificate = async () => {
      try {
        const res = await fetch(`/api/certificate/${id}`);
        const data = await res.json();
        setCertificate(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching certificate:', error);
        setLoading(false);
      }
    };
    getCertificate();
  }, [id]);

  if (loading) {
    return <h3>Loading...</h3>;
  }

  if (!certi) {
    return <h3>No certificate found</h3>;
  }


  return (
<>
<div className="container mx-auto p-6 bg-gray-100 shadow-xl rounded-xl">
  <div className="border-4 border-green-500 p-8 bg-white">
    <div className="border-2 border-green-400 p-4 bg-gray-50">
      <div className="text-center">
        <h2 className="text-4xl font-extrabold text-green-900">Kerala Blockchain Academy</h2>
      </div>
      <div className="mt-8">
        <div className="flex justify-center">
          <div className="w-3/4 text-center">
            <span className="text-2xl font-semibold underline text-green-700">
              Name: 
              <span className='text-3xl font-semibold underline text-green-900' id='name'>{certi.cname}</span>
            </span>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex justify-center">
          <div className="w-3/4 text-center">
            <span className="text-xl italic text-gray-600">has earned</span>
            <span className="text-2xl font-bold text-green-800 block">Grade: 
            <span className='text-3xl font-semibold underline text-green-900' id='grade'>{certi.grade}</span>
            </span>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex justify-center">
          <div className="w-3/4 text-center">
            <span className="text-xl italic block text-gray-600">while completing the training course entitled</span>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex justify-center">
          <div className="w-3/4 text-center">
            <span className="text-2xl font-semibold underline block text-green-700">Course:
            <span className='text-3xl font-semibold underline text-green-900' id='course'>{certi.course}</span>
            </span>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex justify-between">
          <div className="text-left">
            <span className="text-xl font-bold text-green-800">Certificate ID: 
            <span className='text-3xl font-semibold underline text-green-900' id='certid'>{certi.certid}</span>
            </span>
          </div>
          <div className="text-right">
            <span className="text-xl text-gray-700">Date of Completion:
            <span className='text-3xl font-semibold underline text-green-900' id='date'>{certi.date}</span></span><br/>
            <span className="text-xl text-gray-700">Place: Trivandrum</span>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <div className="text-right">
          <span className="block font-bold text-green-900">(sd/-)</span>
          <span className="block font-bold text-green-900">Director</span>
        </div>
      </div>
    </div>
  </div>
</div>



</>
  )
}


export default ViewCertificate 
