import Feature from '../components/common/Feature';

import {NavLink, BrowserRouter, MemoryRouter} from 'react-router-dom';
import Carousel from '../components/common/Carousel';

const Dashboard = () => {
  return (
    <>
      <MemoryRouter>
        <section className="sandbox__carousel flex-grow">
           <Carousel />
        </section>
      </MemoryRouter>
    </>
  );
};

export default Dashboard;
