import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

export default function Empleados() {
  const navigate = useNavigate();
  const onRegisterClick = () => navigate('/register');
  const onViewEmployeesClick = () => navigate('/employeeinfo');

  const token = localStorage.getItem('token');
  let role = '';

  if (token) {
    try {
      const decoded = jwtDecode(token);
      role = decoded.role;
    } catch (err) {
      console.error('Token inválido:', err);
    }
  }

  return (
    <div className="min-vh-100 bg-dark text-white d-flex align-items-center justify-content-center">
      <div className="container py-5 text-center">
        <h1>Sistema de empleados</h1>

        {role === 'admin' && (
          <>
            <button className="btn btn-primary" onClick={onRegisterClick}>
              Registrar empleado
            </button>
            <button className="btn btn-secondary ms-2" onClick={onViewEmployeesClick}>
              Editar y ver empleados
            </button>
            
          </>
        )}
        <button className="btn btn-primary">
                Crear orden
            </button>
            <button className="btn btn-secondary ms-2">
                Buscar clientes
            </button>
            <button className="btn btn-secondary ms-2">
                Ver orden
            </button>
      </div>
    </div>
  );
}
