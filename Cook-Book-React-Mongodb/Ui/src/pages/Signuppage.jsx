import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import{toast} from 'react-toastify'

const Signuppage = () => {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate=useNavigate()

    const signupSubmit = async (userDetails) => {
        const res = await fetch("/api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userDetails),
        });
        console.log(res);
        if (res.ok) { 
          toast.success(`Signup success`);
          return navigate("/login");
        } else {
          toast.error(`Please check the input data`);
          return navigate("/signup");
        }
      };


    const submitForm = (e) =>  {
        e.preventDefault();
        const userDetails = {
          userName,
          password,
          email,
    
        };
        signupSubmit(userDetails);

    }

  return (
    <>
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Create an Account</h2>
        <form onSubmit={submitForm}>
            <div className="mb-4">
                <label htmlFor="username" className="block text-gray-700 mb-2">Username</label>
                <input type="text" id="username" name="username" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required value={userName} onChange={(e) => setUserName(e.target.value)} />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input type="email" id="email" name="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
                <input type="password" id="password" name="password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required value={password} onChange={(e) => setPassword(e.target.value)} />
                <span id="passwordError" className="text-red-500 text-sm"></span>
            </div>
            <div className="mb-6">
                <label htmlFor="confirm-password" className="block text-gray-700 mb-2">Confirm Password</label>
                <input type="password" id="confirm-password" name="confirm-password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
                <span id="confirmPasswordError" className="text-red-500 text-sm"></span>
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Sign Up</button>
        </form>
        <p className="mt-6 text-center text-gray-600">Already have an account? <a href="/login" className="text-blue-500 hover:underline">Login</a></p>
    </div>
    </div>
    </>
  )
}

export default Signuppage
