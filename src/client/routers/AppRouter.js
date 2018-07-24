import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import Card from '../components/Card'
import Unsubscribe from '../components/UnsubscribePage'
import  Admin from '../components/AdminPage'
// import NotFoundPage from '../components/NotFoundPage'

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path='/' component={Card} exact={true} />
        <Route path='/unsubscribe' component={Unsubscribe} />
        <Route path='/admin' component={Admin} />
        {/* <Route component={NotFoundPage}/> */}
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter;
