import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteBlog } from "../../actions/deleteblog";
import { getBlogs } from "../../actions/getblogs";
import { IState } from "../../store";
import EditBlogs from "../layouts/EditBlogs";
import blogs from "../../scss/components/pages/blogs.module.scss";

const Blogs: React.FC = (): JSX.Element => {
  const [showEdit, setShowEdit] = React.useState(false);
  const state = useSelector((state: IState) => state);
  const dispatch = useDispatch();

  const openEdit = () => setShowEdit(true);
  const closeEdit = () => setShowEdit(false);

  useEffect(() => {
    if (state.auth.msg === "dashboard") {
      dispatch(getBlogs());
    }
  }, []);
  return (
    <>
      {state.auth.msg !== "dashboard" ? (
        <>
          <h1>You are not logged in</h1>
        </>
      ) : state.blog.length <= 0 ? (
        <>
          <h1>you don't have any blog</h1>
        </>
      ) : (
        state.blog.map(({ id, title, discreaption }) => (
          <div className={blogs.desktop} key={id}>
            <h1>{title}</h1>
            <h2>{discreaption}</h2>
            <button onClick={() => openEdit()}>edit</button>
            <button onClick={() => dispatch(deleteBlog(id))}>delete</button>
            {showEdit && (
              <>
                <EditBlogs
                  id={id}
                  openEdit={openEdit}
                  closeEdit={closeEdit}
                  title={title}
                  discreaption={discreaption}
                />
              </>
            )}
          </div>
        ))
      )}
    </>
  );
};

export default Blogs;
