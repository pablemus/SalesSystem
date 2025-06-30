import { useState } from 'react';
import { useNavigate } from "react-router";
export default function Register() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    role: 'customer'
  });
    const navigate = useNavigate();
  const handleSubmit = async () => {
    const token = localStorage.getItem('token');
    const res = await fetch('http://localhost:3000/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(form)
    });

    const data = await res.json();
    try{
    if (res.ok) {
      alert('Usuario registrado');
      navigate('/empleados')
    } else {
      alert(data.message);
    }
    } catch (error) {
      console.error('Error al registrar usuario:', error);
      alert('Error al conectar al servidor. Contacta a un administrador e intenta luego.');
    }
  };

  return (
    <div className="container py-5">
      <h2>Registrar nuevo usuario</h2>
      <input className="form-control mb-2" placeholder="Nombre" onChange={e => setForm({ ...form, name: e.target.value })} />
      <input className="form-control mb-2" placeholder="Correo" onChange={e => setForm({ ...form, email: e.target.value })} />
      <input className="form-control mb-2" placeholder="Contraseña" type="password" onChange={e => setForm({ ...form, password: e.target.value })} />
      <select className="form-select mb-3" onChange={e => setForm({ ...form, role: e.target.value })}>
        <option value="customer">employee</option>
        <option value="employee">customer</option>
      </select>
      <button className="btn btn-success" onClick={handleSubmit}>Registrar</button>
    </div>
  );
}
