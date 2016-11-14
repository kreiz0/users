import React, { Component, PropTypes } from 'react'
import actions from '../actions/actionCreators'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router'
import Popup from './Popup'

const mapStateToUserAppProps = (state) => {
  return {
    users: state.users.all
  }
}

const mapDispatchToUserAppProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

class UserList extends Component {
  constructor (props) {
    super(props)
    this.handleDelete = ::this.handleDelete
  }

  componentDidMount () {
    this.props.actions.getAllUsers()
  }

  handleDelete (id) {
    this.props.actions.deleteUser(id)
  }

  render () {
    return (
      <div className='user-list'>
        <Link to={'/add'} >
          <button className='btn btn-default' >Add user</button>
        </Link>
        <table className='table' >
          <thead>
          <tr>
            <th>#</th>
            <th><span className='caret' > </span> Name</th>
            <th><span className='caret' > </span> Login</th>
            <th><span className='caret' > </span> Email</th>
            <th><span className='caret' > </span> Actions</th>
          </tr>
          </thead>
          <tbody>
          {
            this.props.users.map((user, index) => {

              return (
                <tr key={user.id} >
                  <td>
                    {index + 1}
                  </td>
                  <td>{user.name}</td>
                  <td>{user.login}</td>
                  <td>{user.email}</td>
                  <td>
                    <Popup/>
                    <button className='btn btn-default' onClick={() => this.handleDelete(user.id)} >
                      remove
                    </button>
                  </td>
                </tr>
              )
            })
          }
          </tbody>
        </table>
      </div>
    )
  }
}

UserList = connect(mapStateToUserAppProps, mapDispatchToUserAppProps)(UserList)

export default UserList
