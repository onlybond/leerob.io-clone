import "./App.css";
import {Route, Routes,Link,NavLink} from 'react-router-dom';
import Home from "./pages/Index";
import About from "./pages/About";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import Guestbook from "./pages/Guestbook";
function App() {
  return (
    <div className="main-container">
      <nav>
        <Link to = {'/'}><span className="logo-div">L</span></Link>
        <div className="links">
          {/* <a href='/'>Home</a>  */}
          {/* <a href='/' class = 'active'>Home</a>  */}
          {/* <a href='/'>Home</a>  */}

          <NavLink to={'/'}><span>home</span></NavLink>
          <NavLink to={'/About'}><span>about</span></NavLink> 
          <NavLink to={'/blog'}><span>blog</span></NavLink>
          <NavLink to={'/guestbook'}><span>guestbook</span></NavLink>
        </div>
      </nav>
    
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/guestbook" element={<Guestbook/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
