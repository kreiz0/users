import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import actions from '../actions/actionCreators'

const mapStateToUserProps = (state) => {
  return {}
}

const mapDispatchToUserProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}


class AddUser extends Component {
  constructor (props) {
    super(props)
    this.handleNameChange = ::this.handleNameChange
    this.handleLoginChange = ::this.handleLoginChange
    this.handleEmailChange = ::this.handleEmailChange
    this.handleSave = ::this.handleSave
    this.state = ({
      name: '',
      login: '',
      email: ''
    })
  }

  handleNameChange (e) {
    e.preventDefault()
    this.setState({
      name: e.target.value
    })
  }

  handleLoginChange (e) {
    e.preventDefault()
    this.setState({
      login: e.target.value
    })
  }

  handleEmailChange (e) {
    e.preventDefault()
    this.setState({
      email: e.target.value
    })
  }

  handleSave () {
    let user = {
      id: new Date().getTime(),
      name: this.state.name,
      login: this.state.login,
      email: this.state.email,
    }

    this.props.actions.createUser(user)
  }

  render () {
    return (

      <div className='col-md-4 col-md-offset-4' >
        <div className='form-group' >
          <label>Name</label>
          <input className='form-control' type='text'
            value={this.state.name}
            onChange={this.handleNameChange}
            placeholder={'name'} />
        </div>
        <div className='form-group' >
          <label>Login</label>
          <input className='form-control' type='text'
            value={this.state.login.text}
            onChange={this.handleLoginChange}
            placeholder={'login'} />
        </div>
        <div className='form-group' >
          <label>Email</label>
          <input className='form-control' type='text'
            value={this.state.email.text}
            onChange={this.handleEmailChange}
            placeholder={'email'} />
        </div>
        <Link to={'/'} >
          <button className='btn btn-default pull-right' onClick={this.handleSave} >
            save
          </button>
        </Link>
      </div>

    )
  }
}

AddUser = connect(mapStateToUserProps, mapDispatchToUserProps)(AddUser)

export default AddUser
