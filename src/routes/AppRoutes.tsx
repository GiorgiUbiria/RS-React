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
    path: '/forms',
    element: <AddForm page="Forms" />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default AppRoutes;
