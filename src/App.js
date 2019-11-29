import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'

// import Index from './pages/Index'
// import About from './pages/About'
// import Contact from './pages/Contact'

import Routes from './router/index'

function App() {
  return (
    <Router>
      <div>
        <div className="header">
          <ul>
            <li>
              <Link to="/">index</Link>
            </li>
            <li>
              <Link to="/about">about</Link>
            </li>
            <li>
              <Link to="/contact">contact</Link>
            </li>
          </ul>
        </div>
        <hr />
        <Routes />
      </div>
    </Router>
  )
}

// function RouteWithSubRoutes (route) {
//   return (
//     <Route
//       path={route.path}
//       render={props => (
//         <route.component {...props} routes={route.routes} />
//       )}
//     />
//   )
// }

export default App;
