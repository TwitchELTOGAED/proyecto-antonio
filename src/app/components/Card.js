'use client'; 
export default function Card(props) {
  return (
    <div style={{ border: '1px solid #333', margin: '10px', padding: '10px' }}>
      
     
      {props.imagen && (
        <img src={props.imagen} alt="Foto noticia" width="250" />
      )}

      
      {props.titulo && <h3>{props.titulo}</h3>}

     
      {props.descripcion && <p>{props.descripcion}</p>}
      
      <button onClick={() => alert("Abriendo...")}>
        Ver detalle
      </button>
    </div>
  );
}