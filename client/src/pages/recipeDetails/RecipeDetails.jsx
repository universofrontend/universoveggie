import { useParams } from 'react-router-dom';

const RecipeDetails = () => {
  let { id } = useParams(); 
  // Lógica para cargar y mostrar los detalles de la receta con el identificador "id"
  return (
    <div>
      <h2>Detalles de la receta con ID: {id}</h2>
    </div>
  );
}

export default RecipeDetails;