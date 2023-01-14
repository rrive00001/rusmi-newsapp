const initState = {
//  status : 0,
  category : "",
  link : " ",
  name : " ",
  subCategory :[],    
};

export const newsCategoryReducer = (state = initState, action) => {
  switch (action.type) {
    case "UPDATE":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

//untuk daftar kategori