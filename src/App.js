import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './pages/Blogs/Blogs';
import About from './pages/About/About';
import Home from './pages/Home/Home/Home';
import Services from './pages/Home/Services/Services';
import Footer from './pages/Home/Footer/Footer';
import Header from './pages/Home/Header/Header';
import Login from './pages/Login/Login/Login';
import RequireAuth from './pages/Login/RequireAuth/RequireAuth';
import Signup from './pages/Login/Signup/Signup';
import NotFound from './pages/NotFound/NotFound';
import Checkout from './pages/Home/Checkout/Checkout';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/services" element={<Services></Services>} ></Route>
        <Route path="/service/:serviceId" element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        } ></Route>
        <Route path="/blogs" element={<Blogs></Blogs>} ></Route>
        <Route path="/about" element={<About></About>} ></Route>
        <Route path="/login" element={<Login></Login>} ></Route>
        <Route path="/signup" element={<Signup></Signup>} ></Route>
        <Route path="*" element={<NotFound></NotFound>} ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
