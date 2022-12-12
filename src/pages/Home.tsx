import { Caroussel } from '../components/Caroussel';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Profil from './Profil';

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Caroussel />
      <Profil />
      <Footer />
    </div>
  );
};
