import * as types from '../actions/actionTypes'

const persistData = store => next => action => {
  let localState = localStorage.getItem('user')
  console.log('tt', localState)
  if (localState && typeof JSON.parse(localState) === 'object') {
    localState = JSON.parse(localState)
  } else {
    let all = action.payload
    let userState = { all: all }
    localState = Object.assign({}, { users: userState })
  }

  let result
  let newAction

  switch (action.type) {
    case types.GET_ALL_USERS:
      newAction = { type: action.type }
      newAction.payload = localState
      localStorage.setItem('user', JSON.stringify(localState))
      result = next(newAction)
      return result

    case types.CREATE_USER:
      localState.users.all.push(action.user)
      console.log('localState', localState)
      localStorage.setItem('user', JSON.stringify(localState))
    case types.DELETE_USER:
      localState.users.all = localState.users.all.filter((user) => {
        return user.id !== action.payload
      })
      localStorage.setItem('user', JSON.stringify(localState))
    default:
      result = next(action)
      return result
  }
}

export default persistData