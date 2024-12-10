import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Inicio from './components/Inicio/Inicio';
import Presentacion from './components/Presentacion/Presentacion';
import Registrar from './components/Registrar/Registrar';
import Login from './components/Login/Login';
import Proyectos from './components/Proyectos/Proyectos';
import Newproyect from './components/Newproyect/Newproyect';

function App() {
  return (
    <Router>
      <Routes>
        {/* RUTAS PARA ACCEDER A MIS COMPONENTES */}
        <Route path="/" element={<Inicio />} />
        <Route path='/presentacion' element={<Presentacion />} />
        <Route path='/registrar' element={<Registrar />} />
        <Route path='/login' element={<Login />} />
        <Route path='/proyectos' element={<Proyectos />} />
        <Route path='/newproyect' element={<Newproyect />}/>
      </Routes>
    </Router>
  );
}

export default App;
