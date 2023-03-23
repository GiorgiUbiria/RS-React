import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import NotFound from '../pages/404';
import AddForm from '../pages/AddForm';

import { AppRoutesInterface } from '../types/AppRoutesInterface';

const AppRoutes: AppRoutesInterface[] = [
  {
    path: '/',
    element: <Home page="Home" />,
  },
  {
    path: '/about-us',
    element: <AboutUs page="About Us" />,
  },
  {
    path: '/add-form',
    element: <AddForm page="Add a Form" />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default AppRoutes;
