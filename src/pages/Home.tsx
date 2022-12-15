import { Caroussel } from '../components/Caroussel';
import Footer from '../components/Footer';
import {Navbar} from '../components/Navbar';

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Caroussel />
      <Footer />
    </div>
  );
};
