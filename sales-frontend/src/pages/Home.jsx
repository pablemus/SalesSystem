import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode'; // ✅


export default function Home() {
  const [role, setRole] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = jwtDecode(token);
      setRole(decoded.role);
    }
  }, []);

  const handleRegisterClick = () => {
    if (role !== 'admin') {
      alert('Solo administradores pueden registrar nuevos usuarios');
    } else {
      window.location.href = '/register';
    }
  };

  return (
    <div className="bg-dark text-white min-vh-100 d-flex align-items-center justify-content-center">
     <div className="container text-center py-5">
      <h1>Bienvenido al sistema de ventas</h1>
      <a href="/login" className="btn btn-primary me-2">Iniciar sesión</a>
      <button className="btn btn-success" onClick={handleRegisterClick}>
        Registrarse
      </button>
     </div>
    </div>
  );
}
