import React, { useState } from "react";
import axios from "axios";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [lanzamiento, setLanzamiento] = useState("");
  const [desarrollador, setDesarrollador] = useState("");
  const [mode] = useState("post");
  const [id, setId] = useState(null);

  const handleSubmit = event => {
    event.preventDefault();
    if (mode === "post") {
      axios
        .post("https://localhost:44360/api/gestores", {
          nombre,
          lanzamiento,
          desarrollador
        })
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.error(error);
        });
    } else if (mode === "put") {
      axios
        .put(`https://localhost:44360/api/gestores/${id}`, {
          nombre,
          lanzamiento,
          desarrollador
        })
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.error(error);
        });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          className="form-control"
          id="nombre"
          value={nombre}
          onChange={e => setNombre(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="lanzamiento">Lanzamiento</label>
        <input
          type="text"
          className="form-control"
          id="lanzamiento"
          value={lanzamiento}
          onChange={e => setLanzamiento(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="desarrollador">Desarrollador</label>
        <input
          type="text"
          className="form-control"
          id="desarrollador"
          value={desarrollador}
          onChange={e => setDesarrollador(e.target.value)}
        />
      </div>
      {mode === "put" && (
        <div className="form-group">
          <label htmlFor="id">ID</label>
          <input
            type="text"
            className="form-control"
            id="id"
            value={id}
            onChange={e => setId(e.target.value)}
          />
        </div>
      )}<button type="submit" className="btn btn-primary">
      {mode === "post" ? "Crear" : "Actualizar"}
    </button>
  </form>
);
};
export default Formulario;