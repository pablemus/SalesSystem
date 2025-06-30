import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
  try{
    const res = await fetch('http://localhost:3000/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (res.ok) {
      localStorage.setItem('token', data.token);
      const decoded = jwtDecode(data.token);
      if (decoded.role === 'employee' || decoded.role === 'admin') {
        navigate('/empleados');
      } else if (decoded.role === 'customer') {
        navigate('/customer');
      } else {
        alert("Datos no validos, contactar a un administrador")
        navigate('/')
      }
    } else {
      alert(data.message);
    }
  }
  catch (error) {
    console.error('Error al iniciar sesión:', error);
    alert('Error al conectar al servidor. Contacta a un administrador e intenta luego.');
  }
  };
  return (
  <div className='bg-dark text-white d-flex justify-content-center align-items-center min-vh-100'>
     <div className="container py-5">
      <h2>Iniciar sesión</h2>
      <input
        type="email"
        className="form-control mb-2"
        placeholder="Correo"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        className="form-control mb-3"
        placeholder="Contraseña"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="btn btn-primary" onClick={handleLogin}>
        Entrar
      </button>
     </div>
   </div> 
  );
}
