import React, { useState, useEffect } from "react";

function Table() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://localhost:44360/api/gestores");
      const newData = await response.json();
      setData(newData);
    }
    fetchData();
  }, []);

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Lanzamiento</th>
          <th scope="col">Desarrollador</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <th scope="row">{item.id}</th>
            <td>{item.nombre}</td>
            <td>{item.lanzamiento}</td>
            <td>{item.desarrollador}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
