import Header from "./common/header/header";
import "./App.css";
import Footer from "./common/Footer/footer";
import Home from "./common/Home/Home";
import UserProfile from "./components/userProfile/userProfile";
import { Row, Col } from "react-bootstrap";
function App() {
  return (
    <div className="container-box">
      <div style={{}}>
        <Header />
        <Home />
        <UserProfile />
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
