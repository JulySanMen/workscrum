import './Presentacion.css';
import { useNavigate } from 'react-router-dom';

const Presentacion = () => {
    const navigate = useNavigate();

    const handleNavigatePlanA = () => {
        navigate('/registrar'); // Redirige a la ruta del Plan A
    };

    const handleNavigatePlanB = () => {
        navigate('/reistrar'); // Redirige a la ruta del Plan B
    };

    return (
        <div className="m-4">
            <div className='row mt-5 contenedor-principal'>
                <div className='col-12'>
                    <div className='cont-uno border'>
                        <h3 className='text-center mt-4'>PAQUETE</h3>
                        <button
                            type="button"
                            className="buton-comprar text-light"
                            onClick={handleNavigatePlanA} // Redirige al hacer clic
                        >
                            Comprar
                        </button>
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <div className="d-flex justify-content-start m-4 cont-text1">
                    <h3 className="text-light fs-4 m-4 text-center">
                        Bienvenido a WorkScrum, la herramienta diseñada para llevar el control total de tus proyectos bajo la metodología SCRUM
                    </h3>
                </div>
                <div className="d-flex justify-content-end m-4 cont-text2">
                    <h3 className="text-light fs-4 m-4 text-center">
                        Nuestro sistema te ayuda a organizar tareas, colaborar en equipo y alcanzar los objetivos de tu proyecto de manera eficiente.
                    </h3>
                </div>
                <div className="d-flex justify-content-start m-4 cont-text1">
                    <h3 className="text-light fs-4 m-4 text-center">
                        Ya seas un Scrum Master, Product Owner o miembro del equipo de desarrollo, encontrarás las herramientas que necesitas para gestionar tus proyectos.
                        ¡Qué esperas, únete ya!
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default Presentacion;
