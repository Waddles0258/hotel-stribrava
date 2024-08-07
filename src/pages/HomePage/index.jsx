import { Banner } from '../../components/Banner';
import { Footer } from '../../components/Footer';
import { Order } from '../../components/Order';
import { Rooms } from '../../components/Rooms';
import './style.css';

export const HomePage = () => {
  return (
    <>
    <Banner/>
    <Rooms/>
    <Order/>
    <Footer/>
    </>
  );
};
