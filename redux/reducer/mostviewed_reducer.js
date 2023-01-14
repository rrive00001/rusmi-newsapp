const initState = {
//  status : 0,
    post : [],
    link : " ",
    title : " ",
    image : " ",
    category : " ",
    pusblised_at : " ",
};

export const mostViewedReducer = (state = initState, action) => {
  switch (action.type) {
    case "UPDATE":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

//untuk carousel most viewed