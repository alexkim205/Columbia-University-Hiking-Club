const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  isLoading: true,
  user: false,
  errors: {}
}

export default function auth (state = initialState, action) {
  console.log(state)
  switch (action.type) {
    case 'USER_LOADING':
      return { ...state, isLoading: true }

    case 'USER_LOADED':
      return { ...state, isAuthenticated: true, isLoading: false, user: action.user }

    case 'LOGIN_SUCCESSFUL':
      localStorage.setItem('token', action.data.token)
      return { ...state, ...action.data, isAuthenticated: true, isLoading: false, errors: null }

    case 'REGISTRATION_SUCCESSFUL':
      localStorage.setItem('token', action.data.token)
      return { ...state, ...action.data, isAuthenticated: true, isLoading: false, errors: null }

    case 'AUTHENTICATION_ERROR':
    case 'LOGIN_FAILED':
    case 'LOGOUT_SUCCESSFUL':
      localStorage.removeItem('token')
      return {
        ...state,
        errors: action.data,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false
      }

    default:
      return state
  }
}
