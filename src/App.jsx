import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout';
import HomePage from './pages/HomePage/';
import NotFoundPage from './pages/NotFoundPage/';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
