import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { app } from "../firebase";

const Signup = () => {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  console.log(googleProvider);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleEmailChange = (e) => {
    console.log(e.target.value);
    setUser({
      ...user,
      email: e.target.value,
    });
  };

  const handlePasswordChange = (e) => {
    setUser({
      ...user,
      password: e.target.value,
    });
  };

  const signupWithGoogle=async ()=>{
   const p= await signInWithPopup(auth,googleProvider)
   console.log("36",p)
  }

  const signupUser = () => {
    createUserWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log("User signed up:", user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error signing up:", errorCode, errorMessage);
      });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "200px" }}>
      <h1>Signup</h1>
      <label>Enter email</label>
      <input type="email" value={user.email} onChange={handleEmailChange} />
      <label>Enter Password</label>
      <input
        type="password"
        value={user.password}
        onChange={handlePasswordChange}
      />
      <button style={{ margin: "10px" }} onClick={signupUser}>
        Create User
      </button>
      <br />
      <button style={{ margin: "10px" }} onClick={signupWithGoogle}>
        Signin with Google
      </button>
    </div>
  );
};

export default Signup;
