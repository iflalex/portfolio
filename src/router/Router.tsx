//React
import { ReactElement } from 'react';
// Router
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
//Routes
import App from '../App';
import Biography from 'src/views/Biography';
import Portfolio from 'src/views/Portfolio';
import Contact from '../views/Contact';
import DetailsProject from '../views/DetailsProject';
import Error from 'src/views/Error';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<App/>}>
        <Route index element={<Biography/>} />
        <Route path="/Portfolio" element={<Portfolio/>} />
        <Route path="/Contact" element={<Contact/>} />
      </Route>
      <Route path="/Details/:name" element={<DetailsProject/>} />
      <Route path="*" element={<Error/>} />
    </Route>
    
  )
)

export default function Router():ReactElement {
  return <RouterProvider router={router} />;
}

