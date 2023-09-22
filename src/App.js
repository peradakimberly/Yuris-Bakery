import './App.css';
import {
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Pastry from './pages/Pastry';
import Cake from './pages/Cake';
import NotFound from './pages/NotFound';
import RootLayout from './layouts/RootLayout';
import MenuLayout from './layouts/MenuLayout';
import PastryDetails from './pages/PastryDetails';
import CakeDetails from './pages/CakeDetails';
import Contact, {contactAction} from './pages/Contact';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} action={contactAction}/>
      <Route path='menu' element={<MenuLayout />}>
        <Route index path='pastry' element={<Pastry />} />
        <Route path='pastry/:id' element={<PastryDetails />} />
        <Route path='cake' element={<Cake />} />
        <Route path='cake/:id' element={<CakeDetails />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Route>
));

function App() {
  return <RouterProvider router={router} />;
}

export default App;
