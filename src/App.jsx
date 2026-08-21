import { useState } from 'react'
import './App.css'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Provider} from "react-redux";
import { store } from './Redux/store';
import DashboardCards from './Components/DashboardCards';
import UserList from './Components/UserList';
import ProductList from './Components/ProductList';
import ContactList from './Components/ContactList';
import ContactForm from './Components/ContactForm';
import UserPosts from './Components/UserPosts';
import EditContact from './Components/EditContact';

function App() {

  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardCards />}/>
          <Route path="/userlist" element={<UserList />}/>
          <Route path="/productlist" element={<ProductList />}/>
          <Route path="/contactlist" element={<ContactList />}/>
          <Route path="/contactform" element={<ContactForm />}/>
          <Route path="/userposts/:userid" element={<UserPosts />}/>
          <Route path="/editcontact/:contactid" element={<EditContact />}/>
        </Routes>
      </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
