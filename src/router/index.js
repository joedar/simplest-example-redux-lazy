import React, { Suspense, lazy } from 'react'
import { Switch, Route } from 'react-router-dom'

const routes = [
  {
    name: 'index',
    path: '/',
    exact: true,
    component: lazy(() => import('../pages/Index'))
  },
  {
    name: 'about',
    path: '/about',
    component: lazy(() => import('../pages/About'))
  },
  {
    name: 'contact',
    path: '/contact',
    component: lazy(() => import('../pages/Contact'))
  }
]

const Loading = () =>
  <div>loading...</div>

const RouteWithSubRoutes = (route) => (
  <Route
    path={route.path}
    exact={route.exact}
    render={props => (
      <route.component {...props} routes={route.routes} />
    )}
  />
)

export default () => (
  <Suspense fallback={<Loading />}>
    <Switch>
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
    </Switch>
  </Suspense>
)
