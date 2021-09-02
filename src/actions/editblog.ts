import { Dispatch } from "redux";
import { IBlogAction } from "../reducers/blogReducer";
import { EDIT_BLOG } from "../reducers/types";

export const editBlogState = (
  id: string,
  title: string,
  discreaption: string
): IBlogAction => {
  return {
    type: EDIT_BLOG,
    payload: {
      id: id,
      title: title,
      discreaption: discreaption,
    },
  };
};

export const editBlog = (id: string, title: string, discreaption: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const res = await fetch("/api/blog/editblog", {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          id: id,
          title: title,
          discreaption: discreaption,
        }),
      });
      const data: {
        _id: string;
        title: string;
        discreaption: string;
      } = await res.json();
      return dispatch(editBlogState(data._id, data.title, data.discreaption));
    } catch (err) {
      console.log(err);
    }
  };
};
