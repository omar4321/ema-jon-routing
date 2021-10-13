import React from 'react';
import { Link ,useLocation, useHistory } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';

import "./Login.css"

const Login = () => {
    const {user, signInWithGoogle} = UseAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/orders';
    const handleGoogleLogin = () => {
        signInWithGoogle ()
            .then(result => {
                history.push(redirect_uri);
            })
    }


    return (
        <div className='login-from'>
            <div>
            <h2>Loging Your Account</h2>
              <form action="">
                  <input type="email" name ="" id="" placeholder="Enter Your Email"/>
                  <br/> <br/>
                  <input type="password" name ="" id="" placeholder="enter password"/>
                  <br/> <br/>
                  <input className="btn-regular" type="submit" value="submit"/>
                  <br/> <br/>


              </form>

              <p>new to ema-john? <Link to ="/reg">Create Account</Link></p>
                   <div>----------OR-------</div>
                   <br/>
              <button onClick={handleGoogleLogin} className="btn-regular">Google sign In</button>
            </div>
        </div>
    );
};

export default Login;