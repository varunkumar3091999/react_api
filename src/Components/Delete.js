import { useState } from "react";

const Delete = () => {
  const [id, setId] = useState("");

  const deleteUser = () => {
    fetch(`http://localhost:7777/users/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
			body: null
    })
      .then((res) => res.json())
      .then((json) => console.log(json))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <input onChange={(e) => setId(e.target.value)} />
      <button onClick={(e) => deleteUser()}>Delete</button>
    </div>
  );
};

export default Delete;
