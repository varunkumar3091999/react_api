import { useState } from "react";

const Patch = () => {
  const [userId, setUserId] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
		fetch('https://jsonplaceholder.typicode.com/posts/3', {
			method: 'PATCH', 
			body: JSON.stringify({title: "title"})
		})
		.then(response => response.json())
		.then(data => console.log(data))
		.catch(err => console.log(err))
  };

//   const onChange = (e) => {
//     if (e.target.name === "userId") {
//       setUserId(e.target.value);
//     } else if (e.target.name === "title") {
//       setTitle(e.target.value);
//     } else if (e.target.name === "body") {
//       setBody(e.target.value);
//     } else {
//       console.log(" no name ");
//     }
//   };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <div>
        <button type="submit">Patch</button>
      </div>
    </form>
  );
};

export default Patch;
