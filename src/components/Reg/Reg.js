import React from 'react';
import { Link } from 'react-router-dom';

const Reg = () => {
    return (
        <div className='login-from'>
        <div>
        <h2> Register:Create Account</h2>
          <form action="">
              <input type="email" name ="" id="" placeholder="Enter Your Email"/>
              <br/> <br/>
              <input type="password" name ="" id="" placeholder="enter password"/>
              <br/> <br/>
              <input type="password" name ="" id="" placeholder=" Re enter password"/>
              <br/> <br/>
              <input className="btn-regular" type="submit" value="submit"/>
              <br/> <br/>


          </form>

          <p>
Already have an account? <Link to ="/login"> Login Now</Link></p>
               <div>----------OR-------</div>
               <br/>
          <button className="btn-regular">Google sign In</button>
        </div>
    </div>
    );
};

export default Reg;