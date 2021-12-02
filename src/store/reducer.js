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
    case 'get_aq_list':
      return {
        ...state,
        aqList: state.aqList.concat(action.payload || [])
      };
    case 'reset_aq_list':
      return {
        ...state,
        aqList: []
      };
    default:
      return state;
  }
}
