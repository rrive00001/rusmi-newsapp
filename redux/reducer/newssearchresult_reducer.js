const initState = {
  data:"",
  link : "",
  title : "",
  image : "",
  headline : "",
  premium_badge : "",
};

export const newsSearchReducer = (state = initState, action) => {
  switch (action.type) {
    case "UPDATE":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

//untuk hasil pencarian
