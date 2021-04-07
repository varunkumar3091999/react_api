import { useState } from "react";

const Post = () => {
  const [userId, setUserId] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
		fetch('https://jsonplaceholder.typicode.com/posts', {
			method: 'POST', 
			body: JSON.stringify({userId, title, body})
		})
		.then(response => response.json())
		.then(data => console.log(data))
		.catch(err => console.log(err))
  };

  const onChange = (e) => {
    if (e.target.name === "userId") {
      setUserId(e.target.value);
    } else if (e.target.name === "title") {
      setTitle(e.target.value);
    } else if (e.target.name === "body") {
      setBody(e.target.value);
    } else {
      console.log(" no name ");
    }
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <div>
        <input
          type="text"
          name="userId"
          placeholder="User Id"
          required
          value={userId}
          onChange={(e) => onChange(e)}
        />
      </div>
      <div>
        <input
          type="text"
          name="title"
          placeholder="title"
          required
          value={title}
          onChange={(e) => onChange(e)}
        />
      </div>
      <div>
        <input
          type="text"
          name="body"
          placeholder="body"
          required
          value={body}
          onChange={(e) => onChange(e)}
        />
      </div>

      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Post;
