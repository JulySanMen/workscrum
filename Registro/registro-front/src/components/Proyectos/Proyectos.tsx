import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo-principal.png';
import icono from '../../assets/images/icono-perfil.jpg';
import './Proyectos.css';

const Proyectos: React.FC = () => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [userRole, setUserRole] = useState('');

    // Definir el objeto roles con un tipo explícito
    const roles: { [key: number]: string } = {
        1: 'ScrumMaster',
    };

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (!token) {
            navigate('/login'); // Si no hay token, redirige a login
        } else {
            const fetchUserProfile = async () => {
                try {
                    const response = await fetch('http://localhost:8081/api/auth/perfil', {
                        method: 'GET',
                        headers: {
                            'Authorization': `Bearer ${token}`,
                        },
                    });

                    if (response.ok) {
                        const data = await response.json();
                        setUserName(data.perfil.nombre);
                        setUserRole(roles[data.perfil.id_rol as number] || 'Rol desconocido');
                    } else {
                        console.error('Error al obtener perfil:', await response.text());
                        navigate('/login');
                    }
                } catch (error) {
                    console.error('Error al obtener perfil:', error);
                    navigate('/login');
                }
            };

            fetchUserProfile();
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        navigate('/login');
    };

    const handleNewProject = () => {
        navigate('/Newproyect');
    };

    const handleChat = () => {
        navigate('/Chatproyect');
    };

    const handleProyectClick = () => {
        navigate('/Sprints')
    }

    return (
        <div className="m-4">
            {/* HEADER */}
            <div className="d-flex justify-content-between align-items-start mt-3 px-4">
                <img src={logo} alt="Logo" className="logo" />
                <p className="m-4">
                    <a
                        href="#"
                        className="link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover fs-4"
                        onClick={handleChat}
                    >
                        <i className="bi bi-chat-right text-light me-4 fs-1"></i>
                    </a>
                    <a
                        href="#"
                        className="link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover fs-4"
                    >
                        <i className="bi bi-bell me-4 fs-1 text-light"></i>
                    </a>
                    <a
                        href="#"
                        className="link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover fs-4"
                    >
                        <i className="bi bi-person-circle me-4 fs-1 text-light"></i>
                    </a>
                    <a
                        href="#"
                        className="link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover fs-4"
                        onClick={handleLogout}
                    >
                        <i className="bi bi-box-arrow-right fs-1 text-light mw-4"></i>
                    </a>
                </p>
            </div>

            {/* CONTENIDO */}
            <div className="row">
                <div className="col-12 col-xl-3 text-center mb-4">
                    <img src={icono} alt="Icono" className="img-perfil" />
                    <div className="cont mt-4 border col-xl-3">
                        <p className="text-light text-center m-2">Nombre: {userName}</p>
                        <p className="text-light text-center m-2">Puesto: {userRole}</p>
                    </div>
                </div>

                <div className="col-12 col-sm-12 col-9 col-xl-9 text-center">
                    <div className="row m-3">
                        <div className="col-9">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Escribe algo aquí..."
                                aria-label="Ejemplo de texto con botón"
                            />
                        </div>
                        <div className="col-3">
                            <button
                                type="button"
                                className="btn btn-outline-light"
                                onClick={handleNewProject}
                            >
                                Nuevo Proyecto
                            </button>
                        </div>
                    </div>
                    <div className="row m-4 border" onClick={handleProyectClick}>
                        <div className="col-9">
                            <p className="text-start text-light m-4">Proyecto</p>
                            <p className="text-start text-light m-4">Fecha de Inicio</p>
                            <p className="text-start text-light m-4">Estatus</p>
                        </div>
                        <div className="col-3">
                            <p className="text-center text-light m-4 fs-1">
                                <i className="bi bi-justify"></i>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Proyectos;