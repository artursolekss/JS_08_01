import './App.css';
import Customers from './Pages/Customers';
import Container from 'react-bootstrap/Container';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import CreateCustomer from './Pages/CreateCustomer';

function App() {
  return (
    <div className="App">
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<NavBar></NavBar>}>
              <Route index element={<Customers></Customers>}></Route>
              <Route path='createCustomer' element={<CreateCustomer />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
