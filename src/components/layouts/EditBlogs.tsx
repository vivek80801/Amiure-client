import React from "react";
import { useDispatch } from "react-redux";
import editblogclass from "../../scss/components/layouts/edit.module.scss";
import { editBlog } from "../../actions/editblog";

interface IProps {
  id: string;
  title: string;
  discreaption: string;
}

const EditBlogs: React.FC<IProps> = (props): JSX.Element => {
  const [title, setTitle] = React.useState(props.title);
  const [discreaption, setDiscreaption] = React.useState(props.discreaption);
  const dispatch = useDispatch();
  return (
    <>
      <form
        className={editblogclass.desktop}
        onSubmit={(e) => {
          e.preventDefault();
          return dispatch(editBlog(props.id, title, discreaption));
        }}
      >
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter title"
        />
        <textarea
          cols={30}
          rows={10}
          value={discreaption}
          placeholder="Enter discreaption"
          onChange={(e) => setDiscreaption(e.target.value)}
        ></textarea>
        <input type="submit" value="create blog" />
      </form>
    </>
  );
};

export default EditBlogs;
