import React from 'react';
import { Search } from './components/search/search';
import {
  Route,
  NavLink,
  HashRouter,
  Switch
} from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import About from './components/about/about';
import NotFound from './components/notFound/notFound';
import './app.css';
import { DetailPage } from './components/detailPage/detailPage';


const App = ():JSX.Element => {
  const routes = [
    {path : '/' , Component : Search},
    {path : '/about' , Component : About},
    {path : '/details/*' , Component : DetailPage},
    {path : '*' , Component : NotFound},
  ];

  return (
    <HashRouter>
      <nav className='header'>
        <ul className='listNav'>
          <li><NavLink exact to='/' className='link'>Home</NavLink></li>
          <li><NavLink to='/about' className='link'>About</NavLink></li>
       </ul>
    </nav>
      <TransitionGroup>
        <Switch>
        {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={300}
                  classNames="page"
                  unmountOnExit
                >
                  <div className="page">
                    <Component/>
                  </div>
                </CSSTransition>
              )}
            </Route>
          ))}
      </Switch>
      </TransitionGroup>
    </HashRouter>
  )
}

export default App;