import { createBrowserRouter } from 'react-router-dom';
import Home from './routes/Home';
import NotFound from './routes/NotFound';
import Root from './components/Root';
import PostView from './routes/PostView';

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
        path: 'post',
        element: <PostView />,
      },
    ],
  },
]);

export default router;
