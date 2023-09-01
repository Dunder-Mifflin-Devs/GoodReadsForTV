import {useState} from 'react';
import Header from './components/common/Nav/Header';
import Body from './components/common/Body';
import Footer from './components/common/Footer';
import Button from './components/ui/button/Button';
import './assets/styles/index.css';
import './assets/styles/baseStyling.css';

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
      <Body className="flex-grow" />
      <Footer className="mt-auto" />
    </div>
  );
}

export default App;
