import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Product from './components/Product';
import Footer from './components/Footer';
import TestState from './components/testHook/TestState'
import HookFile from './components/testHook/HookFile'

function App() {
  return ( 
    <div>
        <Router>
            <Switch>
                <Route path='/' exact component={Header}>
                </Route>
                <Route path='/product' exact component={Product}></Route>
            </Switch>
        </Router>
        <HookFile/>
        <TestState/>
        <Footer/>
    </div>
  );
}
export default App;