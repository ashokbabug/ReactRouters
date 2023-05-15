import React from 'react'
import { useOutletContext, useParams } from 'react-router-dom'

export default function Book() {
    const {id} = useParams()   //this function will return all the parameters which are passed to this url
    const obj = useOutletContext()

  return (
    <div>
      <h1>Book {id}</h1>
      <h3>Logged in user is {obj.username}</h3> 
    </div>
  )
}
