import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const EmployeeInfo = () => {
  const [search, setSearch] = useState('');
  const [employee, setEmployee] = useState(null);
  const [form, setForm] = useState({ name: '', email: '', role: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const token = localStorage.getItem('token'); 

  const handleSearch = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/employee-info?name=${search}`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (res.data.employees.length === 0) {
        setError('No se encontró ningún empleado');
        setEmployee(null);
      } else {
        const found = res.data.employees[0];
        setEmployee(found);
        setForm({ name: found.name, email: found.email, role: found.role });
        setError('');
      }
    } catch (err) {
      console.error(err);
      setError('Error al buscar empleado');
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`${import.meta.env.VITE_API_URL}/api/employee-info/${employee.id}`, form, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert('Empleado modificado correctamente');
      navigate('/empleados'); 
    } catch (err) {
      console.error(err);
      setError('Error al modificar empleado');
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mt-5">
      <h2>Información de empleado</h2>

      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Buscar por nombre, correo o ID"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn btn-primary mt-2" onClick={handleSearch}>Buscar</button>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      {employee && (
        <div className="mt-4">
          <div className="mb-2">
            <label>Nombre</label>
            <input type="text" className="form-control" name="name" value={form.name} onChange={handleChange} />
          </div>
          <div className="mb-2">
            <label>Correo</label>
            <input type="email" className="form-control" name="email" value={form.email} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label>Rol</label>
            <select className="form-select" name="role" value={form.role} onChange={handleChange}>
              <option value="employee">employee</option>
              <option value="admin">admin</option>
            </select>
          </div>

          <button className="btn btn-success me-3" onClick={handleUpdate}>Modificar información</button>
          <button className="btn btn-secondary" onClick={() => navigate('/empleados')}>
            Volver al panel
          </button>
        </div>
      )}
    </div>
  );
};

export default EmployeeInfo;
