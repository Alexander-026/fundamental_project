import React from "react";
import Button from "../../../../UI/Button/Button";
import classes from "./Post.module.scss";

const Post = ({...props}) => {
  return (
    <div className={classes.post}>
      <div className={classes.post__wrapper}>
        <div>
          <strong>{props.post.id}:{props.title}</strong>
          <div className={classes.post__text}>{props.body}</div>
        </div>
        <Button onClick={() => props.removePost(props.post)}>X</Button>
      </div>
    </div>
  );
};

export default Post;
