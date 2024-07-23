import React from 'react'

function State() {
  return (
    <>
   <div className='container justify-content-center w-50 vh-100 mt-5 border' >
      <form className='border border-warning w-50 vh-auto my-3 ms-5 me-5'>
      <div className=" text-center bg-danger my-0 mx-0">
            <h5 className="text-white">Manage State</h5>
          </div>
        <div className='mb-3 text-center my-3'>

          <label htmlFor='country' className='form-label col-4 text-end' >
            <strong>State:</strong>
            </label>
            <input type='text' className='col-7' placeholder='Enter your state'/>

        </div>
        <div className='mb-3 text-center my-3 me-5'>
        <label htmlFor='country' className='form-label col-4 text-end' >
            <strong>Country:</strong>
        </label>
        <select className='col-5' >
          <option value="0">select</option>
          <option value="1">India</option>
          <option value="2">Nepal</option>
          <option value="3">Buthan</option>
        </select>



        </div>
        <div className='text-center mb-2'>
        <button type='button' className='btn btn-success'>Add State</button>
        </div>
      </form>


    </div>

    </>
             
     
  )
}

export default State
