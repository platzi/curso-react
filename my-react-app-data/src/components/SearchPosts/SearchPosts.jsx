import { useState, useEffect } from "react";

const SearchPosts = () => {
  const [query, setQuery] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?title_like=${query}`)
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching data: ", error))
  }, [query])

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      <input
        type="text"
        placeholder="Buscar por título"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <ul>
        {
          posts.map((posts) => (
            <li key={posts.id}>{posts.title}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default SearchPosts;