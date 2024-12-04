"use client"
import React from 'react'
import Link from 'next/link';

const Page = () => {
  return (
    <form  style={{ maxWidth: "420px", margin: "50px auto", padding: "25px", border: "1px solid #ccc", borderRadius: "10px"}}>
      <h3 style={{ marginBottom: "15px", display:"flex", justifyContent:"center"}}>Register for student <Link href={"./register"}>/tutior</Link></h3>
      <div style={{ marginBottom: "15px" }}>
        <label htmlFor= "userName" style={{ display: "flex", marginBottom: "5px"}}>Name :</label>
        <input type='text' placeholder='Enter your name' id='userName'
                    style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" ,color:"black"}}/>
      </div>
      <div style={{ marginBottom: "15px" }}>
      <label htmlFor= "email" style={{ display: "flex", marginBottom: "5px"}}> email :</label>
      <input type='email' placeholder='Enter your email' id='email'
      style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" ,color:"black" }}/>
      </div>
      <div style={{ marginBottom: "15px" }}>
      <label htmlFor= "pass" style={{ display: "flex", marginBottom: "5px"}}>Password :</label>
      <input type='password' placeholder='Enter your password' id='pass'
      style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" ,color:"black" }}/>
      </div>
      <div style={{ marginBottom: "15px" }}>
      <label htmlFor= "con-pass" style={{ display: "flex", marginBottom: "5px"}}> Confirm password :</label>
      <input type='password' placeholder='Enter your password' id='con-pass'
      style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc",color:"black" }}/>
      </div>
      <button>Submit</button>
  
    </form>
  )
}

export default Page;