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
          <Feature poster="{{ img: '', alt: '' }}" title={'TV Show 2'} />
        </NavLink>
        <NavLink to="/details" className="w-64">
          <Feature poster="{{ img: '', alt: '' }}" title={'TV Show 2'} />
        </NavLink>
        <NavLink to="/details" className="w-64">
          <Feature poster="{{ img: '', alt: '' }}" title={'TV Show 2'} />
        </NavLink>
        <NavLink to="/details" className="w-64">
          <Feature poster="{{ img: '', alt: '' }}" title={'TV Show 2'} />
        </NavLink>
        <NavLink to="/details" className="w-64">
          <Feature poster="{{ img: '', alt: '' }}" title={'TV Show 2'} />
        </NavLink>
      </div>
    </>
  );
};

export default Dashboard;
