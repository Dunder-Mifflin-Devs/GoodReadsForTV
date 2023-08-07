import { useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header";
import Button from "./components/Button";
import "../src/index.css";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      {/* Modal */}
      <Header />
      <Button text='hello'/>
      <Footer />
    </>
  );
}

export default App;
