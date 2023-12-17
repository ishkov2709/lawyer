import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer/Footer';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default SharedLayout;
