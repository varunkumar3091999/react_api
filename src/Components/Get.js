import { useEffect, useState } from 'react';


const Get = () => {
    const [users, setUsers] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    fetch('http://localhost:7777/users')
      .then((res) => res.json())
      .then(json => {
        console.log(json)
        setUsers(json.users)
        setIsLoaded(true)
        console.log(json)
      })
  }, [])

  if(!isLoaded) {
    return <>Loading...</>
  } 

  return (
    <div className="App">
      <ol>
        {users.map((item) => (
          <li key={item.id}>
            {item.firstName}{' '}{item.lastName} 
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Get