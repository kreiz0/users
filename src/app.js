import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import './styles/main.scss'
import store from './store/configureStore'
import { Router, Route, browserHistory } from 'react-router'
import UsersList from './components/UserList'
import AddUser from './components/AddUser'

ReactDOM.render(
  <Provider store={store} >
    <div className="container" >
      <Router history={browserHistory} >
        <Route path='/' component={UsersList} />
        <Route path='/add' component={AddUser} />
      </Router>
    </div>
  </Provider>,
  document.getElementById('root'))

