import './App.css';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import ListBoard from './components/ListBoard';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div> 
      <Router>             
        <Header/> 
          <div className="container">
            <Switch>       
              <Route path = "/" exact component = {ListBoard}></Route>
              <Route path = "/board" component = {ListBoard}></Route>
            </Switch>
          </div>
        <Footer/> 
      </Router>
    </div>
  );
}

export default App;
