//React
import { ReactElement } from 'react';
// Router
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
//Routes
import App from '../App';
import Portfolio from 'src/views/Portfolio';
import Certificates from '../views/Certificates';
import Contact from '../views/Contact';
import DetailsProjet from 'src/views/DetailsProject';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route index element={<Portfolio/>} />
      <Route path="/Details" element={<DetailsProjet/>} />
      <Route path="/Diplomes" element={<Certificates/>} />
      <Route path="/Contact" element={<Contact/>} />
    </Route>
    
  )
)

export default function Router():ReactElement {
  return <RouterProvider router={router} />;
}

