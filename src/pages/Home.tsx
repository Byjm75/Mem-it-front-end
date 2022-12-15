import { Caroussel } from '../components/Caroussel';
import { CategoriesForm } from '../components/CategoriesForm';
import Footer from '../components/Footer';
import {Navbar} from '../components/Navbar';

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Caroussel />
      <CategoriesForm />
      <Footer />
    </div>
  );
};
