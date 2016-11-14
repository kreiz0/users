import * as types from '../actions/actionTypes'

let users = [
  {
    id: 1,
    name: 'Igor',
    login: 'Kreizo',
    email: 'thekreizo@gmail.com'
  },
  {
    id: 2,
    name: 'Andrey',
    login: 'Angel',
    email: 'angel@yandex.ru'
  },
  {
    id: 3,
    name: 'Yuriy',
    login: 'Hokc',
    email: 'hokc@i.ua'
  },
]

const actions = {
  getAllUsers: () => {
    return (dispatch) => {
      dispatch(
        {
          type: types.GET_ALL_USERS,
          payload: users
        }
      )
    }
  },
  createUser: (user) => {
    return {
      type: types.CREATE_USER,
      user: user
    }
  },
  deleteUser: (userId) => {
    console.log('userId', userId)
    return {
      type: types.DELETE_USER,
      payload: userId
    }
  }
}

export default actions
