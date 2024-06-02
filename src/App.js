
import './App.css';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ClientesList from './components/ClienteList';
import ClienteDetail from './components/ClienteDetail';
import ClienteForm from './components/ClienteForm';


function App() {
  return (
    <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={ClientesList} />
                    <Route path="/cliente/:id" component={ClienteDetail} />
                    <Route path="/crear" component={ClienteForm} />
                </Switch>
            </div>
        </Router>
  );
}

export default App;
