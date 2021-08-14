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
import './app.css';


const App = () => {
  return (
    <HashRouter>
      <nav className='header'>
        <ul className='listNav'>
          <li><NavLink exact to='/' className='link'>Home</NavLink></li>
          <li><NavLink to='/about' className='link'>About</NavLink></li>
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