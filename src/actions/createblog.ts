import { Dispatch } from "redux";
import { CREATE_BLOG } from "../reducers/types";
import { IBlogAction } from "../reducers/blogReducer";

export const createBlog = (title: string, discreaption: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const res = await fetch("/api/blog/createblog", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ title: title, discreaption: discreaption }),
      });
      const data: {
        id: string;
        title: string;
        discreaption: string;
      } = await res.json();
      dispatch(createBlogState(data.id, data.title, data.discreaption));
    } catch (err) {
      console.log(err);
    }
  };
};

export const createBlogState = (
  id: string,
  title: string,
  discreaption: string
): IBlogAction => {
  return {
    type: CREATE_BLOG,
    payload: {
      id: id,
      title: title,
      discreaption: discreaption,
    },
  };
};
