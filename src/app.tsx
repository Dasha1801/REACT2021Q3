import React from 'react';
import { Search } from './components/search/search';
import {
  Route,
  NavLink,
  HashRouter,
  Switch
} from 'react-router-dom';
import About from './components/about/about';
import NotFound from './components/notFound/notFound';
// import './app.css';


const App = () => {
  return (
    <HashRouter>
      <nav>
        <ul>
          <li><NavLink exact to='/'>Home</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
        </ul>
      </nav>
      <div className='content'>
        <Switch>
          <Route exact path='/' component={Search}/>
          <Route path='/about' component={About}/>
          <Route path='/*' component={NotFound}/>
        </Switch>
      </div>
    </HashRouter>
  )
}

export default App();