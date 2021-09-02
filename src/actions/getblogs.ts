import { Dispatch } from "redux";
import { GET_BLOGS } from "../reducers/types";
import { IBlogAction } from "../reducers/blogReducer";

export const getBlogs = () => {
  return async (dispatch: Dispatch) => {
    try {
      const res = await fetch("/api/blog/blogs");
      const data: {
        _id: string;
        title: string;
        discreaption: string;
      }[] = await res.json();
      return dispatch(getBlogsState(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const getBlogsState = (
  data: { _id: string; title: string; discreaption: string }[]
): IBlogAction => {
  return {
    type: GET_BLOGS,
    payload: data,
  };
};
