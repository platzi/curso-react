import Card from "./componentes/Card"
import './App.css'

function App() {
  const items = ["React", "JavaScript", "Vite"];

  return (
    <section>
      <h1>¡Hola Mundo!</h1>
      <Card title="Card 1" description="Esta es una descripción" />
      <Card title="Card 2" description="Esta es otra descripción" />
      <ul>
        {
          items.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        }
      </ul>
    </section>
  );
}

export default App
