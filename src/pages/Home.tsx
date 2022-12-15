import { Caroussel } from '../Components/Caroussel';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import AddBtn from '../Components/AddBtn';

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
