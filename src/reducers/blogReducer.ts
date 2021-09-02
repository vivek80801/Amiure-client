import { CREATE_BLOG, EDIT_BLOG, DELETE_BLOG, GET_BLOGS } from "./types";

export type IBlogAction =
  | {
      type: typeof CREATE_BLOG;
      payload: {
        id: string;
        title: string;
        discreaption: string;
      };
    }
  | {
      type: typeof EDIT_BLOG;
      payload: {
        id: string;
        title: string;
        discreaption: string;
      };
    }
  | {
      type: typeof DELETE_BLOG;
      payload: {
        id: string;
      };
    }
  | {
      type: typeof GET_BLOGS;
      payload: {
        _id: string;
        title: string;
        discreaption: string;
      }[];
    };

export const blogReducer = (
  state: { id: string; title: string; discreaption: string }[] = [],
  action: IBlogAction
) => {
  switch (action.type) {
    case "CREATE_BLOG":
      return [
        ...state,
        {
          id: action.payload.id,
          title: action.payload.title,
          discreaption: action.payload.discreaption,
        },
      ];

    case "EDIT_BLOG":
      return [
        ...state.map(({ id, title, discreaption }) =>
          id === action.payload.id
            ? {
                id: action.payload.id,
                title: action.payload.title,
                discreaption: action.payload.discreaption,
              }
            : { id: id, title: title, discreaption: discreaption }
        ),
      ];

    case "DELETE_BLOG":
      return [...state.filter(({ id }) => id !== action.payload.id)];

    case "GET_BLOGS":
      return [
        ...action.payload.map(({ _id, title, discreaption }) => ({
          id: _id,
          title: title,
          discreaption: discreaption,
        })),
      ];

    default:
      return state;
  }
};
