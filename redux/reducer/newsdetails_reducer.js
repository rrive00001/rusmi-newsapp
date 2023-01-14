const initState = {
  link : "",
  title : "",
  author :"",
  location : "",
  image_desc :"",
  post_content:"",
  image : "",
  headline : "",
  category :"",
  pusblised_at :"",
};

export const newsDetailsReducer = (state = initState, action) => {
  switch (action.type) {
    case "UPDATE":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

//untuk detail berita