import './App.css';
import { BrowserRouter as Router,Route , Routes } from 'react-router-dom';
import Home from './pages/Home';
import MyOrder from './pages/MyOrder';
import Offers from './pages/Offers'
import SignUp from './pages/SignUp';
import PLP from './pages/PLP';
import ValueRange from './Products/ValueRange';
import CelebrationCakes from './Products/CelebrationCakes';
import Brownie from './Products/Brownie';
import Muffin1 from './Products/Muffin1';
import Pastries from './Products/Pastries';
import AmericanStyleCookie from './Products/AmericanStyleCookie';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import Demo from './pages/Demo';
import Login from './pages/Login';
import DoubleChoclateBrownie from './Products/DoubleChoclateBrownie';
import NuttyWalnutBrownie from './Products/NuttyWalnutBrownie';
import SpongeBrownie from './Products/SpongeBrownie';
import ChoclateCookies from './Products/ChoclateCookies';
import OatsAndRaisinCookie from './Products/OatsAndRaisinCookie';
import BlueberryMuffin from './Products/BlueberryMuffin';
import VanillaMuffin from './Products/VanillaMuffin';
import ChocolateMuffin from './Products/ChocolateMuffin';
import RedVelvetPastry from './Products/RedVelvetPastry';
import OrderDetails from './pages/OrderDetails';
import Sidebar from './pages/Sidebar';
import Navbar from './components/Navbar';
import MyOffers from './pages/MyOffers';
import Offer from './pages/Offer';
import Profile from './pages/Profile';
import Coupons from './pages/Coupons';
import EditProfile from './pages/EditProfile';
import Refer from './pages/Refer';
import ChangePassword from './pages/ChangePassword';
import Address from './pages/Address';
import AddNewAddress from './pages/AddNewAddress';
import KYC from './pages/KYC';
import KycForm from './pages/KycForm';
import Fav from './pages/Fav';
import CreditManagement from './pages/CreditManagement';
import Test1 from './pages/Test1';
import Navbar2 from './components/Navbar2';
import FeedBack from './pages/FeedBack';
import FAQS from './pages/FAQS';
import OrderFaqs from './pages/orderFaqs';
import CRFaqs from './pages/CRFaqs';
import ShoppingFAQS from './pages/ShoppingFAQS';
import PaymentFaqs from './pages/PaymentFaqs';
import HelpDesk from './pages/HelpDesk';
import Redux from './pages/redux';


function App() {
  return (
    <>
         <Router>
              <Routes>
                <Route path="/" exact element={<Home/>}/>
                <Route path="/navbar" exact element={<Navbar/>}/>
                <Route path="/navbar2z" exact element={<Navbar/>}/>
                <Route path="/myorder" exact element={<MyOrder/>}/>
                <Route path="/offer" exact component={<Offers/>}/>
                <Route path="/register" exact element={<SignUp/>}/>
                <Route path="/plp" exact element={<PLP/>}/>
                <Route path="/Valuerange" exact element={<ValueRange/>}/>
                <Route path="/Celebrationcakes" exact element={<CelebrationCakes/>}/>
                <Route path="/Brownie" exact element={<Brownie/>}/>
                <Route path="/muffin" exact element={<Muffin1/>}/>
                <Route path="/Pastries" exact element={<Pastries/>}/>
                <Route path="/AmericanStyleCookie" exact element={<AmericanStyleCookie/>}/>
                <Route path="/ContactUs" exact element={<ContactUs/>}/>
                <Route path="/AboutUs" exact element={<AboutUs/>}/>
                <Route path="/demo" exact element={<Demo/>}/>
                <Route path="/login" exact element={<Login/>}/>
                <Route path="/DoubleChoclateBrownie" exact element={<DoubleChoclateBrownie/>}/>
                <Route path="/NuttyWalnutBrownie" exact element={<NuttyWalnutBrownie/>}/>
                <Route path="/SpongeBrownie" exact element={<SpongeBrownie/>}/>
                <Route path="/ChocolateCookies" exact element={<ChoclateCookies/>}/>
                <Route path="/OatsAndRaisinCookie" exact element={<OatsAndRaisinCookie/>}/>
                <Route path="/BlueberryMuffin" exact element={<BlueberryMuffin/>}/>
                <Route path="/VanillaMuffin" exact element={<VanillaMuffin/>}/>
                <Route path="/ChocolateMuffin" exact element={<ChocolateMuffin/>}/>
                <Route path="/RedVelvetPastry" exact element={<RedVelvetPastry/>}/>
                <Route path="/OrderDetails" exact element={<OrderDetails/>}/>
                <Route path="/side" exact element={<Sidebar/>}/>
                <Route path="/Myoffers" exact component={<MyOffers/>}/>
                <Route path="/offer" exact component={<Offer/>}/>
                <Route path="/profile" exact element={<Profile/>}/>
                <Route path="/coupons" exact element={<Coupons/>}/>
                <Route path="/editprofile" exact element={<EditProfile/>}/>
                <Route path="/refer" exact element={<Refer/>}/>
                <Route path="/changepassword" exact element={<ChangePassword/>}/>
                <Route path="/address" exact element={<Address/>}/>
                <Route path="/add-new-address" exact element={<AddNewAddress/>}/>
                <Route path="/kyc" exact element={<KYC/>}/>
                <Route path="/KycForm" exact element={<KycForm/>}/>
                <Route path="/fav" exact element={<Fav/>}/>
                <Route path="/creditManagement" exact element={<CreditManagement/>}/>
                <Route path="/test1" exact element={<Test1/>}/>
                <Route path="/navbar2" exact element={<Navbar2/>}/>
                <Route path="/feedback" exact element={<FeedBack/>}/>
                <Route path="/faqs" exact element={<FAQS/>}/>
                <Route path="/Order-faqs" exact element={<OrderFaqs/>}/>
                <Route path="/CR-Faqs" exact element={<CRFaqs/>}/>
                <Route path="/Shopping-Faqs" exact element={<ShoppingFAQS/>}/>
                <Route path="/Payment-Faqs" exact element={<PaymentFaqs/>}/>
                <Route path="/Help-Desk" exact element={<HelpDesk/>}/>
                <Route path="/redux" exact element={<Redux/>}/>
                </Routes>
         </Router> 
    </>
  );
}

export default App;
