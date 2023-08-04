import { useState } from "react";
import "../dist/output.css";
import Login from "./components/Login";
import Footer from "./components/Footer/Footer";

function App() {

  const [showLogin, setShowLogin] = useState(false);

  function handleOnClose() {
    return setShowLogin(false);
  }

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
      <div>
        <button onClick={() => setShowLogin(true)}>Login</button>
      </div>

      <Login onClose={handleOnClose} visible={showLogin} />
      <Footer />
    </>
  );
}

export default App;
