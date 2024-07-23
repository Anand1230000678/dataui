import React from 'react'

function Instagram() {
  return (
   <>
    <div className='containar card p-3 m-3'  >
   <h3 >Instagram Registration Form</h3>
    <form >
      <div className='row card-body '>
        <div className="col">
        <label  class="form-label">First Name</label>
        <input type="text" class="form-control" placeholder='enter your first name'/>
        </div>
        <div className='col'>
        <label  className="form-label">Last Name</label>
        <input type="text" className="form-control" placeholder='enter your Last name'/>
        </div>
        </div>
        <div className='row card-body'>
          <div className='col'>
          <label  className="form-label">Date</label>
          <input type="text" className="form-control"/>
          </div>
          <div className='col'>
          <label  className="form-label">Month</label>
          <input type="text" className="form-control"/>
          </div>
          <div className='col'>
          <label  className="form-label">Year</label>
          <input type="text" className="form-control"/>
          </div>
          </div>
          <div className='row card-body' >
          <div className='col'>
          <label  className="form-label">PhoneNumber</label>
          <input type="number" className="form-control"  placeholder='(099)-975211'/>
          </div>
          <div className='col'>
          <label  className="form-label">Email</label>
          <input type="email" className="form-control"  placeholder='abc@gmail.com' />
          </div>
          </div>
          <div className='row card-body'>
          <div className='col'>
          <label  className="form-label">Address</label>
          <textarea class="form-control"  id="floatingTextarea"></textarea>
          </div>
          <div className='col'>
          <label  className="form-label">City</label>
          <input type="text" className="form-control"/>
          </div>
          </div>
          
          <div className='row card-body'>
            <div className='col'>
            <label className="form-check-label" for="exampleRadios1">
              State:
              </label>
            <select class="form-select" >
            <option selected>Open this select menu</option>
            <option value="1">Bihar</option>
           <option value="2">Uttar Pradesh</option>
          <option value="3">Delhi</option>
           </select>

            </div>
            
            <div className='col'>
            <label className="form-check-label" for="exampleRadios1">
              Country:
              </label>
            <select class="form-select btn-group" >
            <option selected>Open this select menu</option>
            <option value="1">India</option>
           <option value="2">Nepal</option>
          <option value="3">Butan</option>
           </select>

            </div>

          </div>
                  


          <div className='row card-body'>
            <div className='col'>
            <label  className="form-label">Gender:</label>
            <div className=" col form-check">
            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
            
            
            <label className="form-check-label" for="exampleRadios1">
        
             Male
            </label>
            </div>

            <div className=" col form-check">
            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
            <label className="form-check-label" for="exampleRadios1">
             Female
            </label>
            </div>
            </div>
           
            <div className='col'>
            <label  className="form-label m-3 ">Role:</label>
            <div className="col form-check form-check-inline">
           <input className="form-check-input" type="checkbox"  value="option1"/>
          <label className="form-check-label" >Personal</label>
         </div>
          <div className=" col form-check form-check-inline">
         <input className="form-check-input" type="checkbox"  value="option2"/>
         <label className="form-check-label" >Business</label>
         </div>
         <div className=" col form-check form-check-inline">
         <input className="form-check-input" type="checkbox"  value="option2"/>
         <label className="form-check-label" >Creator</label>
         </div>
            </div>
           

          </div>

          <div className='row card-body p-7 float-start '>
            <div className='col'>
            <button class="btn btn-primary" type="submit">Add</button>
            </div>
            <div className='col'>
            <button class="btn btn-success" type="submit">Update</button>
            </div>
            <div className='col'>
            <button class="btn btn-danger" type="submit">Reset</button>
            </div> 
          </div>
         
      
      </form>
      </div>
   </>
  )
}

export default Instagram
