import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Login from './pages/Login';
import Register from './pages/Register';
import Employee from './pages/Empleados'; 
import Employeeinfo from './pages/EmployeeInfo';
function App() {
  
  return (
    <>
     <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/empleados" element={<Employee />} />
      <Route path="/employeeinfo" element={<Employeeinfo />} />
     
    </Routes>
    </>
  );
}

export default App;
