//React
import { ReactElement } from 'react';
// Router
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
//Routes
import App from '../App';
import RouterHome from './RouterHome';
import Projects from '../views/Projects';
import Linkdin from '../views/Linkdin';
import Certificates from '../views/Certificates';
import Contact from '../views/Contact';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      {RouterHome}
      <Route path="/Projets" element={<Projects/>} />
      <Route path="/Linkedin" element={<Linkdin/>} />
      <Route path="/Diplomes" element={<Certificates/>} />
      <Route path="/Contact" element={<Contact/>} />
    </Route>
  )
)

export default function Router():ReactElement {
  return <RouterProvider router={router} />;
}

