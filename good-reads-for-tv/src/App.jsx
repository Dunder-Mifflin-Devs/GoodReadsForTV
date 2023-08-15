import { useState } from "react";
import Footer from "./components/common/Footer"
import Header from "./components/common/Header";
import Button from "./components/ui/button/Button";
import "./assets/styles/index.css"
import "./assets/styles/baseStyling.css"
import LoginInput from "./components/ui/Input/LoginInput";
import ProfileInput from "./components/ui/Input/ProfileInput";
import SearchInput from "./components/ui/Input/SearchInput";
import SignupInput from "./components/ui/Input/SignupInput";

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
      <LoginInput />
      <ProfileInput />
      <SearchInput />
      <SignupInput />
      <Footer />
    </>
  );
}

export default App;
