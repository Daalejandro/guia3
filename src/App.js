import logo from './logo.svg';
import './App.css';
import Componentef from './Componentes/Componentef';
import ComponenteC from './Componentes/ComponenteC';
import Estado from './Componentes/Estado';
import EstadoES7 from './Componentes/EstadoES7';
import CicloVida from './Componentes/CicloVida';
import PokemonesApi from './Componentes/PokemonesApi';
//import Api from './Componentes/Api';

function App() {
  let saludo = "Hola";
  let auth = true;
  let nombres = ['Daniel', 'Alejandro'];
  return (
    <div className="App">
      <header className="App-header">
        <h1>{saludo}</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{auth?"Bienvenido":"No logeado"}</p>
        <ul>
          {nombres.map((n,index)=><li key={index}>{n}</li>)}
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          
          Learn React
        </a>
      </header>
      <Componentef msg="Este es una propiedad desde el padre"></Componentef>
      <ComponenteC msg="Soy una propiedad"></ComponenteC>
      <hr/>
      <Estado/>
      <hr/>
      <EstadoES7/>
      <hr/>
      <CicloVida/>
      <hr/>
     <PokemonesApi/>
     <hr/>
     
    </div>
    
  );
}

export default App;
