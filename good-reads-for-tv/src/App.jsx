// import {useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/common/Nav/Header';
// import Body from './components/common/Body';
import Footer from './components/common/Footer';
import './assets/styles/index.css';
import './assets/styles/baseStyling.css';
import About from "./pages/about"
import Contact from './pages/contact';
import Error404 from './pages/Error404';
import Dashboard from './pages/dashboard';

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
      <Routes>
            <Route exact path='/' element={<Dashboard className="flex-grow"/>}></Route>
            <Route exact path='/about' element={<About className="flex-grow"/>}></Route>
            <Route exact path='/contact' element={<Contact className="flex-grow"/>}></Route>
            <Route exact path='/404' element={<Error404 className="flex-grow"/>}></Route>
      </Routes>
      <Footer className="mt-auto" />
    </div>
  );
}

export default App;
