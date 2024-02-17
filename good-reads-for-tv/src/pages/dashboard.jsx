import Carousel from '../components/common/Carousel';
import {getRandomShows} from '../axios';

const Dashboard = () => {
  
  // console.log(getRandomShows(20))

  return (
    <>
      <section className="sandbox__carousel flex-grow">
        <Carousel />
      </section>
    </>
  );
};

export default Dashboard;
