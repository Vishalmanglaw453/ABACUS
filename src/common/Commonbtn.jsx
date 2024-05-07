import React from 'react'

const Commonbtn = (props) => {
  return (
    <>
        <button className=' commonbtn  ff-urbanist fw-bold text-16 lh-19 '>
        {props.text}
        </button>
    </>
  )
}

export default Commonbtn