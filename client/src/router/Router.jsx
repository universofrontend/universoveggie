import { BrowserRouter as RouterProvider, Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import NotFound from '../pages/notFound/NotFound';
import Recipes from '../pages/recipes/Recipes';
import RecipeDetails from '../pages/recipeDetails/RecipeDetails';

const routes = [
  { path: '/', element: <Home /> },
  { path: '/recetas', element: <Recipes /> },
  { path: '/recetas/:id', element: <RecipeDetails /> },
  { path: '*', element: <NotFound /> }
];

const RouterComponent = () => {
  return (
    <RouterProvider>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </RouterProvider>
  );
}

export default RouterComponent;
