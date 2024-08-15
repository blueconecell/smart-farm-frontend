import { createBrowserRouter } from 'react-router-dom';
import Home from './routes/Home';
import NotFound from './routes/NotFound';
import Root from './components/Root';
import Study from './routes/Study';
import StudyModuleHome from './routes/SmallFarm';
import SmallFarm from './routes/SmallFarm';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'study/:soilSamplePK',
        element: <Study />,
      },
      {
        path: 'smallfarm',
        element: <SmallFarm />,
      },
    ],
  },
]);

export default router;
