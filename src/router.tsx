import { createBrowserRouter } from 'react-router-dom';
import Home from './routes/Home';
import NotFound from './routes/NotFound';
import Root from './components/Root';
import Study from './routes/studyModule/Study';
import StudyModuleHome from './routes/SmallFarm';
import SmallFarm from './routes/SmallFarm';
import Home_studyModule from './routes/studyModule/Home_studyModule';
import Home_gasCapture from './routes/gasCapture/Home_gasCapture';
import GasCapture from './routes/gasCapture/gasCapture';
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
      // 24년 7~8월 토양샘플 토양수분도 학습모듈 페이지
      {
        path: 'gas',
        element: <Home_gasCapture />,
      },
      {
        path: 'gas/:gasAreaSamplePK',
        element: <GasCapture />,
      },

      // 24년 7~8월 토양샘플 토양수분도 학습모듈 페이지
      {
        path: 'study',
        element: <Home_studyModule />,
      },
      {
        path: 'study/:soilSamplePK',
        element: <Study />,
      },
      //small farm : 단순 데이터 입출력 테스트용
      {
        path: 'smallfarm',
        element: <SmallFarm />,
      },
    ],
  },
]);

export default router;
