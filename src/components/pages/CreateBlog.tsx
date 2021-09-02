import React from "react";
import { useSelector } from "react-redux";
import { IState } from "../../store";

const CreateBlog: React.FC = (): JSX.Element => {
  const [title, setTitle] = React.useState("");
  const [discreaption, setDiscreaption] = React.useState("");
  const state = useSelector((state: IState) => state);
  return (
    <>
      {state[0].username.length > 0 && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            (async () => {
              try {
                const res = await fetch(
                  "http://localhost:5000/blog/createblog",
                  {
                    method: "POST",
                    headers: {
                      "content-type": "application/json",
                    },
                    body: JSON.stringify({
                      title: title,
                      discreaption: discreaption,
                    }),
                  }
                );
                const data = res.json();
                console.log(data);
              } catch (err) {
                console.log(err);
              }
            })();
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
