import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef } from 'react';
import { auth } from '../firebase';
import './Signupscreen.css';


function Signupscreen() {
   const emailRef = useRef(null);
   const passwordRef = useRef(null);

   const register = (e) => {
       e.preventDefault();
       
       createUserWithEmailAndPassword(auth,
           emailRef.current.value,
           passwordRef.current.value
       ).then((userCredential) => {
           console.log(userCredential)
       })
       .catch((error) => {
           alert(error.message)
       });
   };

   const signIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth,
        emailRef.current.value,
        passwordRef.current.value
    ).then((userCredential) => {
        console.log(userCredential)
    })
    .catch((error) => {
        alert(error.message)
    });
   }

  return (
    <div className='signupscreen'>
        <form>
           <h1>Sign In</h1>
           <input ref={emailRef} type='email' placeholder='Email' />
           <input ref={passwordRef} placeholder='password' type='password' />
           <button type='submit' onClick={signIn}>
               Sign In
           </button>
           <h4>
               <span className='signupscreen_gray'>
               New to Netflix? 
               </span>
               <span className='signupscreen_link' onClick={register}>
                  Sign up now.
               </span>
           </h4>
        </form>
    </div>
  )
}

export default Signupscreen