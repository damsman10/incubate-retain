import Header from './components/sticky/Header.jsx'
import Footer from './components/sticky/Footer.jsx'
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.jsx';

const App = () => {
  return (
    <div>
      <Router>
        <Header />

        <Home />

        <Footer />
      </Router>
    </div>


// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// const App = () => {
//   return (
//     <Router>
//       <Header />
//       <Switch>
//         <Route path="/" exact>
//           {/* Your Home component */}
//         </Route>
//         <Route path="/about">
//           {/* Your About component */}
//         </Route>
//         <Route path="/services">
//           {/* Your Services component */}
//         </Route>
//         <Route path="/contact">
//           {/* Your Contact component */}
//         </Route>
//       </Switch>
//     </Router>
//   );
// }

  )
}

export default App