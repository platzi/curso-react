const StaticComponent = () => {
  const items = ["Manzana", "Banana", "Cereza"];

  return (
    <ul>
      {
        items.map((item, index) => (
          <li key={index}>{item}</li>
        ))
      }
    </ul>
  )
}

export default StaticComponent;