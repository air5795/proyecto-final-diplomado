import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [cv, setCv] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/cv')
      .then(res => res.json())
      .then(data => setCv(data))
      .catch(err => setError('Error al cargar los datos del CV'));
  }, []);

  if (error) return <div className="container"><p className="error">{error}</p></div>;
  if (!cv) return <div className="container"><p>Cargando CV...</p></div>;

  const { persona, formacion } = cv;

  return (
    <div className="container">
      <div className="cv-card">
        <div className="header">
          <img src={persona.foto} alt={`${persona.nombre} ${persona.apellido}`} className="foto" />
          <h1>{persona.nombre} {persona.apellido}</h1>
          <p className="ciudad">{persona.ciudad}</p>
        </div>

        <div className="section">
          <h2>Formacion Academica</h2>
          <ul className="formacion-list">
            {formacion.map(item => (
              <li key={item.id} className="formacion-item">
                <strong>{item.titulo}</strong>
                <span>{item.institucion}</span>
                <span className="anio">{item.anio}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
