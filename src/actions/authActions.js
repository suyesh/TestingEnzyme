import { CHANGE_AUTH } from 'actions/types'

export const changeAuth = (isLoggedIn) => {
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn
  }
}
