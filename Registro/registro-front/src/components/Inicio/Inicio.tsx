import 'bootstrap/dist/css/bootstrap.min.css';
import './Inicio.css';
import logo from '../../assets/images/logo-principal.png';
import { useNavigate } from 'react-router-dom';

const Inicio = () => {
    // Inicializamos el hook useNavigate
    const navigate = useNavigate();

    // Función para manejar el clic en el botón
    const handleIniciar = () => {
        // Redirigir a la ruta deseada
        navigate('/presentacion');
    };

    const handleRegistrar = () => {
        navigate('/registrar')
    }

    const handleLogin = () => {
        navigate('/login')
    }

    const handleHome = () => {
        navigate('/')
    }

    return (
        <div className="m-4">
            {/* Contenedor principal */}
            <div className="container-fluid">
                <div className="row align-items-center justify-content-between">
                    {/* Logo alineado a la izquierda */}
                    <div className="col-auto">
                        <img src={logo} alt="Logo" className="logo" onClick={handleHome} />
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

                {/* Título principal */}
                <div className="row mt-5">
                    <div className="col-12">
                        <h1 className="titulo-principal text-center text-light">WORKSCRUM</h1>
                    </div>
                </div>

                {/* SUBTÍTULO */}
                <div className="row mt-4">
                    <div className="col-12">
                        <div className="d-flex justify-content-center">
                            <h1 className="subtitulo text-center text-light mt-4">Impulsando el éxito de tu proyecto, Sprint a Sprint.</h1>
                        </div>
                    </div>
                </div>

                {/* BOTÓN INICIAR */}
                <div className="row mt-5">
                    <div className="d-flex justify-content-center">
                        <button 
                            type="button" 
                            className="text-light fs-3 buton"
                            onClick={handleIniciar} // Asignamos el evento de clic
                        >
                            Iniciar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inicio;
