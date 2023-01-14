import { combineReducers } from "redux";
import { newsCategoryReducer } from "./newscategory_reducer";
import { newsDetailsReducer } from "./newsdetails_reducer";
import { newsSearchReducer } from "./newssearchresult_reducer";
import { newsListReducer } from "./newslist_reducer";
import { mostViewedReducer } from "./mostviewed_reducer";
import { subCategoryReducer } from "./subcategory_reducer";

export default combineReducers({
  newsCategoryReducer,
  newsDetailsReducer,
  newsSearchReducer,
  newsListReducer,
  mostViewedReducer,
  subCategoryReducer,
});
