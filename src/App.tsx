import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cadastro from './components/Cadastro';
import Login from './components/Login';
import Logout from './components/Logout';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/cadastro' element={<Cadastro />} />
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
