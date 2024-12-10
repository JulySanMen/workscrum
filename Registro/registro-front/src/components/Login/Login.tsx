import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo-principal.png';
import './Login.css';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:8081/api/auth/login', { // Asegúrate de que la URL sea la correcta
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const data = await response.json();
                alert(data.message); // Mostrar el mensaje de éxito

                // Almacenar el token en localStorage
                localStorage.setItem('authToken', data.token);

                // Redirigir a la página de inicio (o cualquier otra página que desees)
                navigate('/proyectos');
            } else {
                const message = await response.text();
                alert(message); // Mostrar el mensaje de error
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error al iniciar sesión.');
        }
    };

    const handleRegistrar = () => {
        navigate('/registrar'); // Redirige a la página de registro
    };

    const handleHome = () => {
        navigate('/')
    }

    //Provicional
    const handleProvicional = () => {
        navigate('/proyectos')
    }

    return (
        <div className="m-4">
            {/* Logo en la esquina superior izquierda y enlace Registrarse en la esquina superior derecha */}
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
                            >
                                |
                            </a>
                        </div>
                        <div className="p-2">
                            <a
                                className="fs-4 link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover text-light"
                                onClick={handleRegistrar}
                            >
                                Registrarse
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Formulario de inicio de sesión en la parte inferior */}
            <div className="d-flex justify-content-center mt-5">
                <div className="login-box border col-12 col-md-6">
                    <h2 className='text-light'>Iniciar sesión</h2>
                    <div className="input-group">
                        <label className='text-light'>Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Ingresa tu correo"
                        />
                    </div>
                    <div className="input-group">
                        <label className='text-light'>Contraseña</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Ingresa tu contraseña"
                        />
                    </div>
                    <button onClick={handleLogin}>Iniciar sesión</button>
                    <button className='mt-4' onClick={handleProvicional}>Provicional</button>
                </div>
            </div>
        </div>
    );
};

export default Login;