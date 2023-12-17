import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout';
import NotFoundPage from './pages/NotFoundPage';
import HomePage from './pages/HomePage';
import { ResolutionContext } from './context';

const App = () => {
  return (
    <ResolutionContext.Provider value={{ a: 1 }}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </ResolutionContext.Provider>
  );
};

export default App;
