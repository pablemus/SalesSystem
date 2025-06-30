import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Employee from './pages/Empleados'; 
function App() {
  useEffect(() => {
    // Habilita el toast si Bootstrap lo necesita dinámicamente
    const toastEl = document.getElementById('adminToast');
    if (toastEl) {
      toastEl.classList.remove('show'); // lo ocultamos al iniciar
    }
  }, []);

  const handleRegisterClick = () => {
    const toast = document.getElementById('adminToast');
    if (toast) {
      toast.classList.add('show');
    }
  };

  return (
    <>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/empleados" element={<Employee />} />
     
    </Routes>
    </>
  );
}

export default App;
