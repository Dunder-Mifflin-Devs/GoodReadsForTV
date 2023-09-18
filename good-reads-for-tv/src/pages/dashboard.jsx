import Feature from '../components/common/Feature';
import { NavLink } from 'react-router-dom';

const Dashboard = () => {
  return (
    <>
      <div className="flex flex-grow flex-row flex-wrap gap-6">
        <NavLink to="/details" className="w-64">
          <Feature poster="{{ img: '', alt: '' }}" title={'TV Show 1'} className=""/>
        </NavLink>
        <NavLink to="/details" className="w-64">
          <Feature poster="{{ img: '', alt: '' }}" title={'TV Show 2'} />
        </NavLink>
        <NavLink to="/details" className="w-64">
          <Feature poster="{{ img: '', alt: '' }}" title={'TV Show 3'} />
        </NavLink>
        <NavLink to="/details" className="w-64">
          <Feature poster="{{ img: '', alt: '' }}" title={'TV Show 4'} />
        </NavLink>
        <NavLink to="/details" className="w-64">
          <Feature poster="{{ img: '', alt: '' }}" title={'TV Show 5'} />
        </NavLink>
        <NavLink to="/details" className="w-64">
          <Feature poster="{{ img: '', alt: '' }}" title={'TV Show 6'} />
        </NavLink>
        <NavLink to="/details" className="w-64">
          <Feature poster="{{ img: '', alt: '' }}" title={'TV Show 7'} />
        </NavLink>
      </div>
    </>
  );
};

export default Dashboard;
