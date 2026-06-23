"use client";

import {useState} from "react";

import api from "@/lib/api";

export default function AdminLogin(){

 const [username,setUsername]=useState("");

 const [password,setPassword]=useState("");

 const [message,setMessage]=useState("");

 async function login(e){

  e.preventDefault();

  try{

   const response=await api.post(

    "/auth/login",

    {
      username,
      password
    }

   );

   localStorage.setItem(

    "token",

    response.data.token

   );

   setMessage(
    "Login successful"
   );

  }

  catch{

   setMessage(
    "Invalid credentials"
   );

  }

 }

 return(

 <div className="min-h-screen flex justify-center items-center">

 <form

 onSubmit={login}

 className="w-96 shadow-xl p-8 rounded-xl"

 >

 <h1 className="text-3xl font-bold mb-6">

 Admin Login

 </h1>

 <input

 className="w-full border p-3 mb-4 rounded"

 placeholder="Username"

 value={username}

 onChange={(e)=>setUsername(e.target.value)}

 />

 <input

 type="password"

 className="w-full border p-3 mb-4 rounded"

 placeholder="Password"

 value={password}

 onChange={(e)=>setPassword(e.target.value)}

 />

 <button

 className="w-full bg-black text-white p-3 rounded"

 >

 Login

 </button>

 <p className="mt-4">

 {message}

 </p>

 </form>

 </div>

 )

}