import { useState } from "react"

interface Material {
  name: string
  price: number
  espesor: number
  textura: string
  ancho: number
  largo: number
}
const MaterialList = () => {
  const [materials] = useState<Material[]>([])
  
  const loadMaterials = async () => {
    // '/materials.json' es la url de la ruta
  }

  return (
    <div>
      <h1>Listado de Materiales</h1>
      {
        materials.map(material => (
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Espesor</th>
                <th>Medidas (mm)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{ material.name }</td>
                <td>{ material.price }</td> 
                <td>{ material.espesor }</td>
                <td>
                  <img width="50" height="50" src="material.textura" alt="Textura" />
                </td>
                <td>{ material.ancho }x{ material.largo }</td>
              </tr>
            </tbody>
        </table>
        ))
      }
    </div>
  )
}

export default MaterialList 