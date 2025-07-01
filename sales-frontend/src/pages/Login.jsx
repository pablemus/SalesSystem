import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
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
          alert("Datos no válidos, contactar a un administrador");
          navigate('/');
        }
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      alert('Error al conectar al servidor. Contacta a un administrador e intenta luego.');
    }
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-black text-white">
      <div className="w-100" style={{ maxWidth: '400px' }}>
        <h5 className="mb-4">← Login to continue...</h5>

        <div className="form-group mb-3">
          <input
            type="email"
            className="form-control bg-dark text-white border-0"
            placeholder="Username or Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group mb-3">
          <input
            type="password"
            className="form-control bg-dark text-white border-0"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          className="btn w-100"
          style={{ backgroundColor: '#176b85', color: 'white' }}
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}
