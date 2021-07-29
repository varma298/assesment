import logo from './logo.svg';
import './App.css';
import Login from './Login'
import XYZ from './EmlpoyeeList'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
 return(
   <div>
     <Switch>
     <Route exact path= '/' component={Login} />
     <Route path="/employeeList" component={XYZ}/>
     </Switch>
   

   </div>

 )

}

export default App;
