import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import CreateUser from '../pages/CreateUser';
import ViewUsers from '../pages/ViewUsers';
import UpdateUser from '../pages/UpdateUser';

const AppRoutes = () => {
  return (
    <BrowserRouter>
     <Routes>
        {/* Define your routes here */}
        <Route path='/' element={<Home/>}/>

        {/* CRUD OPPERATION ROUTE */}
        <Route path='/create' element={<CreateUser/>}/>
        <Route path='/view' element={<ViewUsers/>} />
        <Route path='/update/:id' element={<UpdateUser/>}/>
     </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;