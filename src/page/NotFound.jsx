import React from 'react'
import notfoundImg from "../asset/notfound.png"
export default function NotFound() {
  return (
    <div style={{display:'flex' , justifyContent:'center' , alignItems:'center'}}>
        <img src={notfoundImg} alt="page not found" />
    </div>
  )
}

