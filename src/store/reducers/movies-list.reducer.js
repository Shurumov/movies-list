const initialState = {
  moviesList: [],
};

export default (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case 1:
      return {
        ...state,
        processing: payload,
      };
    case 2:
      return {
        ...state,
        moviesList: payload,
      };
    default:
      return state;
  }

}