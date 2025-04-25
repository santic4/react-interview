import { useEffect, useState } from "react"

interface Material {
  name: string
  price: number
  espesor: number
  textura: string
  ancho: number
  largo: number
}

const MaterialList = () => {
  const [materials, setMaterials] = useState<Material[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadMaterials = async () => {
      const ruta = `/materials.json`
      try {    
        const materials = await fetch(ruta)
  

        .then(async response => {
          if(!response.ok){
            throw new Error('Error en la peticion.')
          }

          const materialsJson = await response.json()
          
          console.log(materialsJson.materials,'materials')
          setMaterials(materialsJson.materials)
        })
      } catch (error) {
        console.error(error)
      } finally{
        setLoading (false) // El ultimo paso es desactivar el loading
      }
  
    }

    loadMaterials()
  }, [])



  return (
    <div>
      <h1>Listado de Materiales</h1>

      {loading ? (
        <p>Cargando materiales...</p> // loading
      ) : (
   
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Espesor</th>
                <th>Medidas (mm)</th>
                <th>Textura</th>
              </tr>
            </thead>
            <tbody>

            { // el map creaba muchas tablas
              materials.map((material, index) => (
              <tr key={index}> 
                <td>{ material.name }</td>
                <td>{ material.price }</td> 
                <td>{ material.espesor }</td>

                <td>{ material.ancho }x{ material.largo }</td>
                <td>
                  <img width="50" height="50" src={material.textura} alt="Textura" />
                </td>
              </tr> 
              ))
            }   
            </tbody>
        </table>

          )}
    </div>
    
  )
}

export default MaterialList 