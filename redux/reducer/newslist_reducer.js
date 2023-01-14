const initState = {
  subCategory :[],
  posts :[],
  data:" ",
  link : " ",
  title : " ",
  image : " ",
  headline : " ",
  premium_badge : "",
  category : " ",
  pusblised_at : " ",
};

export const newsListReducer = (state = initState, action) => {
  switch (action.type) {
    case "UPDATE":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
