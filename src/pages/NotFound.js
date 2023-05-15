import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export default function NotFound() {
  return <Navigate to="/" />
  //   const navigate = useNavigate()
  //   useEffect(()=>{
  //       setTimeout(()=>{
  //           navigate("/")
  //       },1000)
  //   },[])
  // return (
  //   <div>
  //     <h1>Not Found</h1>
  //   </div>
  // )
}
