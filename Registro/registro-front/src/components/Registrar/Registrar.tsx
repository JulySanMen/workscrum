import './Registrar.css';
import logo from '../../assets/images/logo-principal.png';
import { useState, useEffect } from 'react'; // Importar useState y useEffect
import { useNavigate } from 'react-router-dom'; // Importar useNavigate para redirección

const Registrar = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [roles, setRoles] = useState<any[]>([]);
    const [selectedRole, setSelectedRole] = useState('');
    const navigate = useNavigate(); // Hook de React Router para redirección

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const userData = {
            nombre: name,
            email: email,
            password: password,
            id_rol: selectedRole,
        };

        try {
            const response = await fetch(`http://localhost:3000/api/users/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (response.ok) {
                console.log('Usuario registrado');
                alert('Registro exitoso');
                setName('');
                setEmail('');
                setPassword('');
                setSelectedRole('');
            } else {
                console.log('Error al registrar usuario');
                alert('Error al registrar usuario');
            }
        } catch (error) {
            console.error('Error en la solicitud:', error);
            alert('Hubo un problema al registrar el usuario');
        }
    };

    const fetchRoles = async () => {
        try {
            const response = await fetch(`http://localhost:3000/api/users/roles`);
            if (response.ok) {
                const rolesData = await response.json();
                setRoles(rolesData);
            } else {
                console.error('Error al obtener los roles');
            }
        } catch (error) {
            console.error('Error al obtener los roles:', error);
        }
    };

    useEffect(() => {
        fetchRoles();
    }, []);

    const handleLogin = () => {
        navigate('/login'); // Redirige a la página de inicio de sesión
    };

    const handleHome = () => {
        navigate('/') //Redirige a la pagina de inicio
    }


    return (
        <div className='m-4'>
            <div className="row align-items-center justify-content-between">
                {/* Logo alineado a la izquierda */}
                <div className="col-auto">
                    <img src={logo} alt="Logo" className="img-fluid logo" onClick={handleHome} />
                </div>

                {/* Enlaces alineados a la derecha */}
                <div className="col-auto">
                    <div className="d-flex justify-content-end">
                        <div className="p-2">
                            <a
                                className="fs-4 link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover text-light"
                                onClick={handleLogin}
                            >
                                Iniciar Sesión
                            </a>
                        </div>
                        <div className="p-2">
                            <a
                                className="fs-4 link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover text-light"

                            >
                                |
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-center align-items-start vh-75 mt-5">
                <div className="form-container border rounded p-4 shadow-lg">
                    <h2 className="text-center text-light mb-4">Registro</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label text-light">Nombre</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                placeholder="Ingresa tu nombre"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label text-light">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Ingresa tu email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password" className="form-label text-light">Contraseña</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Crea una contraseña"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="role" className="form-label text-light">Rol</label>
                            <select
                                className="form-select"
                                id="role"
                                value={selectedRole}
                                onChange={(e) => setSelectedRole(e.target.value)}
                            >
                                <option value="">Selecciona un rol</option>
                                {roles.map((role) => (
                                    <option key={role.id_rol} value={role.id_rol}>
                                        {role.rol}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="text-center">
                            <button
                                type="submit"
                                className="btn btn-dark w-100"
                                onClick={handleHome}
                            >
                                Registrarme
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registrar;