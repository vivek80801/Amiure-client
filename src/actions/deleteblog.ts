import { Dispatch } from "redux";
import { IBlogAction } from "../reducers/blogReducer";
import { DELETE_BLOG } from "../reducers/types";

export const deleteBlogState = (id: string): IBlogAction => {
  return {
    type: DELETE_BLOG,
    payload: {
      id: id,
    },
  };
};

export const deleteBlog = (id: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const res = await fetch("/api/blog/delete", {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ id: id }),
      });
      const data: { id: string } = await res.json();
      return dispatch(deleteBlogState(data.id));
    } catch (err) {
      console.log(err);
    }
  };
};
