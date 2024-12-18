import { useState, useEffect } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        if (!response.ok) {
          throw new Error("Error al obtener los datos.")
        }
        const data = await response.json()
        setUsers(data)
      } catch (error) {
        setError(error)
      } finally {
        setIsLoading(false);
      }
    }

    fetchUsers();
  }, [])

  if (isLoading) {
    return <p>Cargando...</p>
  }

  if (error) {
    return <p>Error: {error}</p>
  }

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      <ul>
        {
          users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default UserList;