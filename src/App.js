import './App.css';
import { Route, Switch, Redirect } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import Store from './components/Store';
import ProductDetails from './components/ProductDetails';
import Navbar from './components/shared/Navbar';
import ShopCart from './components/ShopCart';
import Slider from './components/Slider';
import Login from "./components/Login";
import Signup from "./components/SignUp"
import Chartline from "./components/Chartline"
import HCategories from './components/HCategories';
import Discount from './components/Discount';
import TelegramB from "./components/TelegramB"
import InstagramB from "./components/InstaB"
import WatsappB from "./components/WatsappB"


// Context
import ProductContextProvider from './context/ProductContextProvider';
import CartContextProvider from './context/CartContextProvider';
import { Col, Row } from 'react-bootstrap';


function App() {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <Navbar />
        <Switch>
          <Route path="/products/:id" component={ProductDetails} />
          <Route path="/slider" component={Slider} />
          <Route path="/products" component={Store} />
          <Route path="/discount" component={Discount} />
          <Route path="/categories" component={HCategories} />
          <Route path="/chartline" component={Chartline} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/cart" component={ShopCart} />
          <Redirect to="/products" />
        </Switch>
        <Row class="container" className='row'>
          <Col xs={4} className="col1" >
            <Row>
              <Col xs={6} className="col1" >
                <h2>Contact us</h2>
                <br />
                <TelegramB />
                <br />
                <WatsappB />
                <br />
                <InstagramB />
              </Col>
              <Col xs={6} className="col1" >
                <h2>Contact us</h2>
                <br />
                <TelegramB />
                <br />
                <WatsappB />
                <br />
                <InstagramB />
              </Col>
            </Row>
          </Col>
          <Col xs={8} className="col1" >
            <Row>
              <Col xs={6} className="col1" >
                <h2>Contact us</h2>
                <br />
                <TelegramB />
                <br />
                <WatsappB />
                <br />
                <InstagramB />
              </Col>
              <Col xs={6} className="col1" >
                <h2>Contact us</h2>
                <br />
                <TelegramB />
                <br />
                <WatsappB />
                <br />
                <InstagramB />
              </Col>
            </Row>
          </Col>
        </Row>
      </CartContextProvider>
    </ProductContextProvider>
  );
}

export default App;
