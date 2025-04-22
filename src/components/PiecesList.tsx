const pieces = [
  {
      name: "C/F Cajon 1026",
      material: "Blanco MDF",
      ancho: "1187.00",
      largo: "128.33",
      tipo: "CAJON"
  },
  {
      name: "Lat. Izq. Cajon 1026",
      material: "Blanco MDF",
      ancho: "128.33",
      largo: "450.00",
      tipo: "CAJON"
  },
  {
      name: "Base Cajon 1024",
      material: "Blanco MDF",
      ancho: "1187.00",
      largo: "414.00",
      tipo: "CAJON"
  },
  {
      name: "Frente Cajon 1024",
      material: "Blanco MDF",
      ancho: "1217.00",
      largo: "186.33",
      tipo: "CAJON"
  },
  {
      name: "Lat. Der. Cajon 1026",
      material: "Blanco MDF",
      ancho: "128.33",
      largo: "450.00",
      tipo: "CAJON"
  },
  {
      name: "Sep. Vertical 1022",
      material: "Blanco MDF",
      ancho: "573.00",
      largo: "500.00",
      tipo: "BASE"
  },
  {
      name: "Lat. Izquierdo",
      material: "Blanco MDF",
      ancho: "1164.00",
      largo: "500.00",
      tipo: "BASE"
  },
  {
      name: "Base Cajon 1026",
      material: "Blanco MDF",
      ancho: "1187.00",
      largo: "414.00",
      tipo: "CAJON"
  },
  {
      name: "Lat. Der. Cajon 1024",
      material: "Blanco MDF",
      ancho: "128.33",
      largo: "450.00",
      tipo: "CAJON"
  },
  {
      name: "C/F Cajon 1024 (2)",
      material: "Blanco MDF",
      ancho: "1187.00",
      largo: "128.33",
      tipo: "CAJON"
  },
  {
      name: "Estante 1008",
      material: "Blanco MDF",
      ancho: "2464.00",
      largo: "500.00",
      tipo: "BASE"
  },
  {
      name: "C/F Cajon 1026 (2)",
      material: "Blanco MDF",
      ancho: "1187.00",
      largo: "128.33",
      tipo: "CAJON"
  },
  {
      name: "Lat. Derecho",
      material: "Blanco MDF",
      ancho: "1164.00",
      largo: "500.00",
      tipo: "BASE"
  },
  {
      name: "Base Cajon 1028",
      material: "Blanco MDF",
      ancho: "1187.00",
      largo: "414.00",
      tipo: "CAJON"
  },
  {
      name: "Frente Cajon 1028",
      material: "Blanco MDF",
      ancho: "1217.00",
      largo: "186.33",
      tipo: "CAJON"
  },
  {
      name: "Lat. Izq. Cajon 1024",
      material: "Blanco MDF",
      ancho: "128.33",
      largo: "450.00",
      tipo: "CAJON"
  },
  {
      name: "Puerta 1004 D",
      material: "Blanco MDF",
      ancho: "1194.00",
      largo: "1245.00",
      tipo: "PUERTA"
  },
  {
      name: "Lat. Izq. Cajon 1028",
      material: "Blanco MDF",
      ancho: "128.33",
      largo: "450.00",
      tipo: "CAJON"
  },
  {
      name: "Frente Cajon 1026",
      material: "Blanco MDF",
      ancho: "1217.00",
      largo: "186.33",
      tipo: "CAJON"
  },
  {
      name: "C/F Cajon 1024",
      material: "Blanco MDF",
      ancho: "1187.00",
      largo: "128.33",
      tipo: "CAJON"
  },
  {
      name: "Sep. Vertical 1011",
      material: "Blanco MDF",
      ancho: "573.00",
      largo: "500.00",
      tipo: "BASE"
  },
  {
      name: "Puerta 1004 I",
      material: "Blanco MDF",
      ancho: "1194.00",
      largo: "1245.00",
      tipo: "PUERTA"
  }
]

const PiecesList: React.FC = () => {
  return (
    <div>
      <h1>Despiece</h1>
      <div>
        <p></p>
      </div>
      <select>
        <option value="BASE">Base</option>
      </select>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Ancho</th>
            <th>Largo</th>
            <th>Material</th>
            <th>Tipo</th>
          </tr>
        </thead>
        <tbody>
          {
            pieces.map(piece => (
              <tr>
                <td style={{ padding: '5px' }}>{ piece.name }</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default PiecesList 