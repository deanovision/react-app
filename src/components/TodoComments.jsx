import React, { useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import TodoModal from "./TodoModal";
import axios from "axios";

export default function TodoComments({ todo, history, project_id }) {
  const [comments, setComments] = useState([]);
  const token = localStorage.getItem("bc_access_token");
  const company_id = localStorage.getItem("company_id");
  useEffect(() => {
    // Get the todo details
    axios
      .post(`${process.env.REACT_APP_API_URL}/get_todos`, {
        token: token,
        company_id: company_id,
        project_id: project_id,
        todo_id: todo.id
      })
      .then(res => {
        console.log(res.data);
        //set comments as state
        setComments(res.data.comments);
      })
      .catch(err => console.log(err));
  }, [company_id, project_id, todo.id, token]);
  ///handle the HTML returned from todo comments
  function createMarkup(markup) {
    return { __html: markup };
  }

  return (
    <div>
      <p>{todo.content}</p>
      {/* checking that comments exist before mapping each comment to a div */}
      {comments
        ? comments.map(comment => {
            //setting innerHTML with content from todo comments
            //need to find alternatives for adding HTML dynamically
            return (
              <div
                key={comment.id}
                style={{ display: "flex", margin: "40px 0px" }}
              >
                <Avatar
                  style={{ margin: "10px 25px 0px 0px" }}
                  alt={comment.creator.name}
                  src={comment.creator.avatar_url}
                />
                <div>
                  <p>
                    <strong>{comment.creator.name}</strong>
                  </p>
                  <div
                    style={{ lineHeight: "1.75" }}
                    key={comment.id}
                    dangerouslySetInnerHTML={createMarkup(comment.content)}
                  />
                </div>
              </div>
            );
          })
        : null}

      <TodoModal todo={todo} project_id={project_id} />
    </div>
  );
}
