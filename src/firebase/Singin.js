import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";

const Signin = () => {
  const auth = getAuth(app);
  console.log(auth)
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const handleEmailChange = (e) => {
    console.log(e.target.value)
    setUser({
      ...user,
      email: e.target.value
    });
  };

  const handlePasswordChange = (e) => {
    setUser({
      ...user,
      password: e.target.value
    });
  };

  const signupUser = () => {
    signInWithEmailAndPassword(auth, user.email, user.password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("line 38",error)
    });
  };

  return (
    <div style={{display:"flex" ,flexDirection:"column",width:"200px"}}>
        <h1>Login</h1>
      <label>Enter email</label>
      <input
        type="email"
        value={user.email}
        onChange={handleEmailChange}
      />
      <label>Enter Password</label>
      <input
        type="password"
        value={user.password}
        onChange={handlePasswordChange}
      />
      <button style={{margin:"10px"}}onClick={signupUser}>Create User</button>
    </div>
  );
};

export default Signin;
