
import Landing from './react/LandingPage.jsx';
import Home from "./react/Home.jsx"
import Form from "./react/FormClass.jsx"
import Detalle from "./react/Detalle.jsx" 
import { Route,Switch} from 'react-router-dom';


function App() {
  return (
    <div >
    <Switch> 
  <Route exact path="/"> <Landing /> </Route>
  <Route exact path="/Home"> <Home/></Route> 
  <Route exact path="/Formulario"> <Form/></Route>
  <Route exact path="/Detalle/:id"> <Detalle/></Route>
  </Switch>
    </div>
  );
}

export default App;
