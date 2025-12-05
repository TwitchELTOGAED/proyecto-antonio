'use client'; 
export default function Card(props) {
  return (
    <div>
      <h3>{props.titulo}</h3>
      <p>Categoría: {props.categoria}</p>
      <p>{props.descripcion}</p>
      
      <button onClick={() => alert("Abriendo: " + props.titulo)}>
        Leer más
      </button>
      <br/><br/>
    </div>
  );
}