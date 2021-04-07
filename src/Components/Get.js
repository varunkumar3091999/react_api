import { useEffect, useState } from 'react';


const Get = () => {
    const [items, setItems] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then(json => {
        setItems(json)
        setIsLoaded(true)
        console.log(json)
      })
  }, [])

  if(!isLoaded) {
    return <>Loading...</>
  } 

  return (
    <div className="App">
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            Name: {item.name} | Email: {item.email} 
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Get