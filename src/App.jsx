import "./styles.css";
import { useState, useEffect, createContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import GoToMenu from "./components/GoToMenu";
import Thankyou from "./components/Thankyou";

export const UserContext = createContext(null);

const App = () => {
  const [userList, setUserList] = useState([]);
  const [login, setLogin] = useState(false);
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const data = {
    items,
    login,
    setLogin,
    userList,
    setUserList,
    cart,
    setCart,
    showModal,
    setShowModal,
    showCart,
    setShowCart,
  };
  const getData = async () => {
    const response = await fetch("data/feeds.json");
    const apiData = await response.json();
    setItems(apiData);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Router>
      <UserContext.Provider value={data}>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<SignUp />} />
          <Route exact path="/login" element={<Login />} />
          <Route
            exact
            path="/goto"
            element={
              login ? (
                <GoToMenu setShowCart={setShowCart} />
              ) : (
                <Navigate replace to="/" />
              )
            }
          />
          <Route
            exact
            path="/menu"
            element={login ? <Menu /> : <Navigate replace to="/" />}
          />
          <Route exact path="/thankyou" element={<Thankyou />} />
        </Routes>
      </UserContext.Provider>
    </Router>
  );
};
export default App;
