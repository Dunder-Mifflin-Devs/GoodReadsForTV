// import {useState} from 'react';
import Header from './components/common/Nav/Header';
// import Body from './components/common/Body';
import Footer from './components/common/Footer';
import './assets/styles/index.css';
import './assets/styles/baseStyling.css';

//These show warnings but are imported in the Routes.jsx file
import { Route,
  useRoutes,
  Link,
  Outlet,
  useParams } from 'react-router-dom';
import { Routes } from './Routes.jsx'

function App() {
  // const [isModalOpen, setModalOpen] = useState(false);

  // const handleOpenModal = () => {
  //   setModalOpen(true);
  // };

  // const handleCloseModal = () => {
  //   setModalOpen(false);
  // };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--black)]">
      <Header />
      <Routes/>
      <Footer className="mt-auto" />
    </div>
  );
}

export default App;