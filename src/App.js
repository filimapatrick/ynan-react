
import './App.css';
import { Routes, Route,  } from "react-router-dom";
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NavBar from './Component/NavBar';
import BlogPage from './pages/BlogPage';
import EventPage from './pages/EventPage';



function App() {
  return (
    <div className="App">
  

  <div data-theme-mode-panel-active data-theme="light">
  <div className="site-wrapper overflow-hidden ">
    <NavBar />

<Routes>
<Route path="/" element={<HomePage />} />
<Route path="/about" element={<AboutPage />} />
<Route path="/contact" element={<ContactPage />} />
<Route path="/blog" element={<BlogPage />} />
<Route path="/event" element={<EventPage />} />


</Routes>
</div>
</div>
  

</div> 
  
  );
}

export default App;
