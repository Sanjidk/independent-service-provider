import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './shared/Header/Header';
import Footer from './shared/Footer/Footer';
import NotFound from './shared/NotFound/NotFound';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import Blogs from './pages/Blogs/Blogs';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/services" element={<Services></Services>} ></Route>
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
