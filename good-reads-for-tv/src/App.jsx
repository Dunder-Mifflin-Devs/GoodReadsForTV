import { useState } from "react";
import Footer from "./components/common/Footer"
import Header from "./components/common/Nav/Header";
import Button from "./components/ui/button/Button";
import "./assets/styles/index.css"
import "./assets/styles/baseStyling.css"

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
