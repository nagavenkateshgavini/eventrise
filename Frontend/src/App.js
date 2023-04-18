import Header from "./common/header/header";
import "./App.css";
import Footer from "./common/Footer/footer";
import Home from "./common/Home/Home";
import UserProfile from "./components/userProfile/userProfile";
import { Row, Col } from "react-bootstrap";
import Login from "./components/Login/login";
function App() {
  return (
    <div className="container-box">
      <Row>
        <Header />
      </Row>
      <Row>
        <Login />
        <Home />
        <UserProfile />
      </Row>
      <Row>
        <Footer></Footer>
      </Row>
      <div></div>
    </div>
  );
}

export default App;
