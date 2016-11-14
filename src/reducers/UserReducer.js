import * as types from '../actions/actionTypes'

const INITIAL_USER_STATE = {
  all: []
}

function UserReducer (state = INITIAL_USER_STATE, action) {
  switch (action.type) {
    case types.GET_ALL_USERS:
      let users = action.payload.users.all.map(user => {
        return user
      })
      return Object.assign({}, state, { all: users })
    case types.CREATE_USER:

      let newUser = action.user
      let allUsers = state.all

      allUsers.push(newUser)
      console.log('allUsers', allUsers)
      return Object.assign({}, state, { all: allUsers })
    case types.DELETE_USER:
      console.log('state.all', state.all)
      console.log('action.payload', action.payload)
      return Object.assign({}, state, {
        all: state.all.filter(user => {
          return user.id !== action.payload
        })
      })
    default:
      return state
  }
}

export default UserReducer
