import './App.css';
import Customers from './Pages/Customers';
import Container from 'react-bootstrap/Container';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import CreateCustomer from './Pages/CreateCustomer';
import { useState } from 'react';
import Login from './Auth/Login';

function App() {

  const USER = "user";
  const user = sessionStorage.getItem(USER);

  return (
    <div className="App">
      {user !== null &&
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
      }
      {user === null &&
        <Login></Login>
      }
    </div>
  );
}

export default App;
