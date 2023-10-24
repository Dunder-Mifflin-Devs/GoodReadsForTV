import Feature from '../components/common/Feature';
import { NavLink } from 'react-router-dom';
import Carousel from '../components/common/Carousel';

const OPTIONS = { loop: true }
const SLIDE_COUNT = 10
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const Dashboard = () => {
  return (
    <section className="sandbox__carousel flex-grow">
      <Carousel slides={SLIDES} options={OPTIONS} />
    </section>
  );
};

export default Dashboard;
