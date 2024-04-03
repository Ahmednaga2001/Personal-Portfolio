import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResponsiveAppBar from './component/navbar';
import '../src/style.css';
import Home from './page/home';
import Services from './page/services';
import About from './page/About';
import Project from './page/project';
import Contact from './page/contact';
import Footer from './component/footer';
import NotFound from './page/NotFound';

const App = () => {
  return (
    <Router>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
