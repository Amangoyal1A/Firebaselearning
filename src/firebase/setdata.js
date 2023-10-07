import React from "react";
import { getDatabase, ref, set } from "firebase/database";
import { app } from "../firebase";

const SetData = () => {
  const database = getDatabase(app);

  const putdata = () => {
    set(ref(database, "/users/aman"), {
      id: 23221,
      age: 21,
      name: "aman goyal",
    });
  };

  return (
    <>
      <button onClick={putdata}> put data</button>
    </>
  );
};

export default SetData;
