import { lazy, Suspense, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import s from './App.module.css';
import i18n from 'i18n';
import LocaleContext from 'LocaleContext';

const LayoutPage = lazy(() =>
  import('../../pages/LayoutPage' /* webpackChunkName: "layout-page" */),
);

const HomePage = lazy(() =>
  import('../../pages/HomePage' /* webpackChunkName: "home-page" */),
);

function App() {
  const [locale, setLocale] = useState(i18n.language);

  i18n.on('languageChanged', lng => setLocale(i18n.language));

  return (
    <>
      <LocaleContext.Provider value={{ locale, setLocale }}>
        <Suspense fallback={<h1 className={s.centered}>Loading...</h1>}>
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
      </LocaleContext.Provider>
    </>
  );
}

export default App;
