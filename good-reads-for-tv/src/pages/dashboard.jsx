import {useState, useEffect} from 'react';
import Carousel from '../components/common/Carousel';
import {getRandomShows} from '../axios';

const Dashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async amount => {
      try {
        const response = await getRandomShows(amount);
        setData(response.results);
        console.log(response.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <section className="sandbox__carousel flex-grow">
        <Carousel />
      </section>
    </>
  );
};

export default Dashboard;
