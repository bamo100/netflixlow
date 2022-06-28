import React, {useState} from 'react';
import './Loginscreen.css';
import Signupscreen from './Signupscreen.js'

function Loginscreen() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className='loginscreen'>
       <div className='loginscreen_bg'>
          <img src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' className='loginscreen_logo' alt=''/>

          <button onClick={() => setSignIn(true)}
          className='loginscreen_button'>
              Sign In
          </button>

          <div className='loginscreen_gradient'/>
       </div>

       <div className='loginscreen_body'>
         {
           signIn ? (
             <Signupscreen />
           ):(
              <>
              <h1>
                Unlimited films, TV programmes and more.
              </h1>
              <h2>Watch anywhere. Cancel at any time.</h2>
              <h3>
                Ready to watch? Enter your email to create or restart your membership
              </h3>
              
              <div className='loginscreen_input'>
                <form>
                    <input type='email' placeholder='Email Address' />
                    <button onClick={() => setSignIn(true)}
                    className='loginscreen_getstarted'>
                      GET STARTED
                    </button>
                </form>
              </div>
            </>
           )
         }
       </div>
    </div>
  )
}

export default Loginscreen