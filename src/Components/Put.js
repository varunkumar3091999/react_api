import { useState } from "react";

const Put = () => {
  const [id, setId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify({firstName,lastName}))
		fetch(`http://localhost:7777/users/${id}`, {
			method: 'PUT', 
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({firstName,lastName})
		})
		.then(response => response.json())
		.then(data => console.log('data => ', data))
		.catch(err => console.log('error => ',err))
  };

  const onChange = (e) => {
    if (e.target.name === "id") {
      setId(e.target.value);
    } else if (e.target.name === "firstName") {
      setFirstName(e.target.value);
    } else if (e.target.name === "lastName") {
      setLastName(e.target.value);
    } else {
      console.log(" no name ");
    }
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <div>
        <input
          type="text"
          name="id"
          placeholder="id"
          required
          value={id}
          onChange={(e) => onChange(e)}
        />
      </div>
      <div>
        <input
          type="text"
          name="firstName"
          placeholder="firstName"
          value={firstName}
          onChange={(e) => onChange(e)}
        />
      </div>
      <div>
        <input
          type="text"
          name="lastName"
          placeholder="lastName"
          value={lastName}
          onChange={(e) => onChange(e)}
        />
      </div>
      <div>
        <button type="submit">Patch</button>
      </div>
    </form>
  );
};

export default Put;
