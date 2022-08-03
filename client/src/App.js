import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginForm from './pages/auth/Login';
import RegisterForm from './pages/auth/Register';
import HomeForm from './pages/booking/Home';
import TopNav from './components/TopNav';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/user/Dashboard';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <TopNav />
      <Routes>
        <Route path='/' element={<HomeForm />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/register' element={<RegisterForm />} />
        <Route path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>} />


      </Routes>
    </BrowserRouter >
  );
}

export default App;
