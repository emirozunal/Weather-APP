import './App.css';
import {BrowserRouter as Router,Switch} from 'react-router-dom'
import Weather from './Weather'


function App() {
  return (
    
    <Router>
    
    <div className="App">
    
      <Switch>
        
        <Weather/>
      
      </Switch>
     
    </div>

    
    </Router>
  
    

  );
}

export default App;
