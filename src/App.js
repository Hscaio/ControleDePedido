import  {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer'
import Container from './components/layout/Container'

import Orders from './components/pages/Orders';
import Customers from './components/pages/Customers'
import Customer from './components/pages/Customer';

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes> 
          <Route exact path='/' element={<Orders/>} />
          <Route path='/customers' element={<Customers/>} />
          <Route path='/customer/:id' element={<Customer/>} />
        </Routes>           
      </Container>             
      <Footer/>      
    </Router>    
  );
}

export default App;
