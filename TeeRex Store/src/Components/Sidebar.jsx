import React from 'react'
import"../Styles/Sidebar.css"
const Sidebar = () => {
  return (
    <div className='Sidebar'>
        <h3>Colour</h3>
         
         <label htmlFor="red">
         <input type="checkbox" name="colour" id="red" value="red" />
            Red</label> <br/>
        
        <label htmlFor="blue">
        <input type="checkbox" name="colour" id="blue" value="" />
            Blue</label> <br/>
        
        <label htmlFor="green">
        <input type="checkbox" name="colour" id="green" value="" />
            Green</label> <br/>
        <h3>Gender</h3>
        
        <label htmlFor="male">
            <input type="checkbox" name="gender" id="male" />
            Male</label> <br/>
      
        <label htmlFor="female">
              <input type="checkbox" name="gender" id="female" />
            Female</label> <br/>
        <h3>Price</h3>
       
        <label htmlFor="">
        <input type="checkbox" name="" id="" />
            0-Rs250</label> <br />
        
        <label htmlFor="">
            <input type="checkbox" name="" id="" />
            Rs251-450</label> <br />
        
        <label htmlFor="">
            <input type="checkbox" name="" id="" />
            Rs 450</label> <br />
        <h3>Type</h3>
        
        <label htmlFor="">
            <input type="checkbox" name="" id="" />
            Polo</label> <br />
        
        <label htmlFor="">
            <input type="checkbox" name="" id="" />
            Hoddie</label> <br />
        
        <label htmlFor="">
            <input type="checkbox" name="" id="" />
            Basic</label> <br />
    </div>
  )
}

export default Sidebar