import { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import "./App.css";
import MainContainer from "./containers/MainContainer";
import Layout from "./shared/Layouts/Layout";
import Login from "./screens/Login/Login";
import Register from "./screens/Register/Register";
import CarouselComponent from "./screens/Carousel/CarouselComponent";
import Organizations from './screens/Organizations/Organizations'
import About from "./screens/About/About";
import {
  loginUser,
  registerUser,
  verifyUser,
  removeToken,
} from "./services/auth";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    history.push("/");
  };

  const handleRegister = async (registerData) => {
    const userData = await registerUser(registerData);
    setCurrentUser(userData);
    history.push("/");
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("authToken");
    removeToken();
  };

  return (
    <Layout currentUser={currentUser} handleLogout={handleLogout}>
      
      <div className="App">
        
        <Switch>
          <Route path="/login">
            <Login handleLogin={handleLogin} />
          </Route>

          <Route path="/register">
            <Register handleRegister={handleRegister} />
          </Route>

          <Route exact path="/">
            
            <CarouselComponent />
          </Route>
          <Route path='/organizations'>
          <MainContainer />
          </Route>
          <Route path="/About"></Route>
        </Switch>

        </div>
      
    </Layout>
  );
}
export default App;
