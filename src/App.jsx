import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/sticky/Header';
import Footer from './components/sticky/Footer';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Program from './pages/Course';
import FAQS from './pages/FAQS';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/program/:programSlug" element={<Program />} />
        <Route path="/faq" element={<FAQS />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
