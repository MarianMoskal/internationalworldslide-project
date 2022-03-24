import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import s from './App.module.css';

const LayoutPage = lazy(() =>
  import('../../pages/LayoutPage' /* webpackChunkName: "layout-page" */),
);

const HomePage = lazy(() =>
  import('../../pages/HomePage' /* webpackChunkName: "home-page" */),
);

function App() {
  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/" element={<LayoutPage />}>
            <Route index element={<HomePage />} />
          </Route>

          <Route
            path="*"
            element={<h1 className={s.centered}>Page not found!</h1>}
          />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
