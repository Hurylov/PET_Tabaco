
import { AuthNav } from 'components/AuthNav/AuthNav';

import { Goods } from 'components/Goods/Goods';

import { Layout } from 'components/Layout/Layout';
import { HomePage } from 'pages/HomePage/HomePage';

import { Routes, Route } from 'react-router-dom';
// import Header from './components/Header/Header';
// import Home from './pages/HomePage/HomePage';
// import Goods from './components/Goods/Goods';


function App() {
  
  return (
  <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/goods" element={<Goods />} />
        <Route path="/auth" element={<AuthNav/>} />
        {/* <Route path="/authorization" element={<Authorization />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Route>
   </Routes>
    // <Router>
    //    <div>
    //      <Header />
    //        <Route exact path="/" component={Home} />
    //        <Route path="/Goods" component={Goods} />
    //    </div>
    //  </Router>
  );
}

export default App;