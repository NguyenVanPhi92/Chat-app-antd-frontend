import { Route, Routes } from "react-router-dom";
import "./App.css";
import ChatWindow from "./components";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import UserInfoModal from "./components/Modals/UserInfoModal";

function App() {
  const userCurrent = false;

  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<ChatWindow />} />
          {!userCurrent && <Route path="/login" element={<Login />} />}

          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
      <UserInfoModal />
    </>
  );
}

export default App;
