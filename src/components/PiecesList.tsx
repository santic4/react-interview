import { useState } from "react"

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
  const [filter, setFilter] = useState('ALL') // estado para los filtros

  const filteredPieces = filter === 'ALL'
  ? pieces
  : pieces.filter(piece => piece.tipo === filter)

  const metrosCuadradosTotales = pieces.reduce((acumulado, pieza) => {
    const ancho = Number(pieza.ancho)
    const largo = Number(pieza.largo)
  
    if (isNaN(ancho) || isNaN(largo)) return acumulado
  
    const areaEnMm = ancho * largo
    return acumulado + areaEnMm
  }, 0) / 1_000_000 // convierte a m²


  return (
    <div>
      <h1>Despiece</h1>
      <div>
        <p><strong>m² total:</strong> {metrosCuadradosTotales.toFixed(2)} m²</p>
      </div>

      <select
        value={filter}
        onChange={e => setFilter(e.target.value)} // registra los cambios del selector
      >
        <option value="ALL">Todos</option>
        <option value="BASE">Base</option>
        <option value="CAJON">Cajón</option>
        <option value="PUERTA">Puerta</option>
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
            filteredPieces.map((piece, index) => ( // renderiza las piezas filtradas
              <tr key={index}>
                <td style={{ padding: '5px' }}>{piece.name}</td>
                <td style={{ padding: '5px' }}>{piece.ancho}</td>
                <td style={{ padding: '5px' }}>{piece.largo}</td>
                <td style={{ padding: '5px' }}>{piece.material}</td>
                <td style={{ padding: '5px' }}>{piece.tipo}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default PiecesList 