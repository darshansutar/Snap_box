import React, { Suspense, lazy } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import Register from "./pages/Register";
// import Login from "./pages/Login";
// import Chat from "./pages/Chat";
// import SetAvatar from './pages/SetAvatar';
const Chat = lazy(() => import("./pages/Chat"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const SetAvatar = lazy(() => import("./pages/SetAvatar"));
const SetUsername = lazy(() => import("./pages/SetUsername"));



function App() {
  return  <BrowserRouter>
  <Suspense fallback={<></>}>
    <Routes>
      <Route path='/register' element={<Register />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/setAvatar' element={<SetAvatar />}></Route>
      <Route path='/setusername' element={<SetUsername />}></Route>
      <Route path='/' element={<Chat />}></Route>
    </Routes>
  </Suspense>
</BrowserRouter>
}

export default App
