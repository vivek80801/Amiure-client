import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { IState } from "../../store";
import { createBlog } from "../../actions/createblog";
import createblogclass from "../../scss/components/pages/createblog.module.scss";

const CreateBlog: React.FC = (): JSX.Element => {
  const [title, setTitle] = React.useState("");
  const [discreaption, setDiscreaption] = React.useState("");
  const state = useSelector((state: IState) => state);
  const dispatch = useDispatch();
  return (
    <>
      {state.auth.username.length > 0 && (
        <form
          className={createblogclass.desktop}
          onSubmit={(e) => {
            e.preventDefault();
            return dispatch(createBlog(title, discreaption));
          }}
        >
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title of blog"
            required
          />
          <textarea
            onChange={(e) => setDiscreaption(e.target.value)}
            cols={30}
            rows={10}
            placeholder="Enter discreaption"
          ></textarea>
          <input type="submit" value="create blog" />
        </form>
      )}
    </>
  );
};

export default CreateBlog;
