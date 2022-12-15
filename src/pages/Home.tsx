import { Caroussel } from '../components/Caroussel';
import Footer from '../components/Footer';
import { Navbar } from '../components/Navbar';
import AddBtn from '../components/AddBtn';

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Caroussel />
      <Footer />
      <AddBtn />
    </div>
  );
};
