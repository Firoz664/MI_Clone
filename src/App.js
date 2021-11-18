/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
import './App.css';
import PreNavbar from './components/PreNavbar.js';
import Navbar from './components/Navbar.js';
import Slider from './components/Slider';
import data from "./data/data.json"
import{BrowserRouter as Router,Route} from "react-router-dom";
import Offers from './components/Offers.js';
import Heading from './components/Heading';
import StarProduct from './components/StarProduct';
import HotAccessoriesMenu from './components/HotAccessoriesMenu';
import HotAccessories from './components/HotAccessories';
import ProductReviews from './components/ProductReviews';
import Videos from './components/Videos';
import Banner from './components/Banner';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <PreNavbar/>
      <Navbar/>
      <Slider start={data.banner.start}/>
      <Offers offer={data.offer}/>
      <Heading text="STAR PRODUCTS"/>
      <StarProduct starProduct={data.starProduct}/>
      <Heading text="HOT ACCESSORIES"/>
      <HotAccessoriesMenu/>

     
      <Route exact path="/music">
      <HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music}/>
      </Route>

      <Route exact path="/smartDevice">
      <HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice}/>
      </Route>

      <Route exact path="/home">
      <HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home}/>
      </Route>

      <Route exact path="/lifeStyle">
      <HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle}/>
      </Route>


      <Route exact path="/mobileAccessories">
      <HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories}/>
      </Route>
      <Heading text="PRODUCTS REVIEWS"/>

      <ProductReviews  productReviews={data.productReviews}/>
      <Heading text="PRODUCTS VIDEO"/>
      <Videos videos={data.videos}/>
      <Heading text="IN THE PRESS"/>
      <Banner banner={data.banner}/>
      <Footer footer={data.footer}/>

      </Router>
    
    
  );
}

export default App;
