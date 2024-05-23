import { useState } from 'react'
import './App.css'
import TemporaryDrawer from './components/navigation/drawer'
import SearchAppBar from './components/surfaces/appBar'
import HomePage from './components/pages/home';
import { Routes, Route } from 'react-router-dom';
import RegisterForm from './components/auth/register';

function App() {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <SearchAppBar setOpen={setOpenDrawer}/>
      <TemporaryDrawer open={openDrawer} setOpen={setOpenDrawer} />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/register' element={<RegisterForm />} />
      </Routes>
    </>
  )
}

export default App
