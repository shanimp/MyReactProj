import { useState } from 'react'
import './App.css'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import DashboardCards from './Components/DashboardCards';
import UserList from './Components/UserList';
import ProductList from './Components/ProductList';
import ContactList from './Components/ContactList';
import ContactForm from './Components/ContactForm';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardCards />}/>
          <Route path="/userlist" element={<UserList />}/>
          <Route path="/productlist" element={<ProductList />}/>
          <Route path="/contactlist" element={<ContactList />}/>
          <Route path="/contactform" element={<ContactForm />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
