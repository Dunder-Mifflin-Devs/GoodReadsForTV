import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "../dist/output.css";
import Login from "./Login";
import Header from "./Header";

function App() {
  const [count, setCount] = useState(0);

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
      <div>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {/* Modal */}
      <div>
        <button onClick={() => setShowLogin(true)}>Login</button>
      </div>
      <Header />
      <Login onClose={handleOnClose} visible={showLogin} />
    </>
  );
}

export default App;
