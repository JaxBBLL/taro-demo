export function reducer(state, action) {
  console.log(state, action);
  switch (action.type) {
    case 'loading_start':
      return {
        ...state,
        loading: true
      };
    case 'loading_end':
      return {
        ...state,
        loading: false
      };
    case 'set_name':
      return {
        ...state,
        users: action.payload.data
      };
    default:
      return state;
  }
}
