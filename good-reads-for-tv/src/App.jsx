import { useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header";

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
      <Footer />
    </>
  );
}

export default App;
