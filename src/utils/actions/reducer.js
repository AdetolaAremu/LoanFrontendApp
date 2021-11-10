import { GET_NOTIFICATION_SETTING } from "./types"

const INITIAL_STATE = {
  notification: undefined,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
      case GET_NOTIFICATION_SETTING:
          return {
              ...state,
              notification: action.payload
          }
      default:
          return state
  }
}