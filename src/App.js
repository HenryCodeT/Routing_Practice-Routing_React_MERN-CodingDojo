import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import Param from './components/Param';
import WordStyle from './components/WordStyle';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path={"/home"}  render={(routeProps)=> <Home {...routeProps}/> }/>
          <Route path={"/:word/:color1/:color2"}  render={(routeProps)=> <WordStyle {...routeProps}/> }/>
          <Route path={"/:id"}  render={(routeProps)=> <Param {...routeProps}/> }/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
