const initState = {
  link : " ",
  name : " ",
};

export const subCategoryReducer = (state = initState, action) => {
  switch (action.type) {
    case "UPDATE":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
