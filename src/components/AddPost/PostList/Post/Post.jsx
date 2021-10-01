import React from "react";
import { useHistory } from "react-router";
import Button from "../../../../UI/Button/Button";
import classes from "./Post.module.scss";

const Post = ({ ...props }) => {
  const router = useHistory()
  return (
    <div className={classes.post}>
      <div className={classes.post__wrapper}>
        <div className={classes.post__context}>
          <strong>
            {props.post.id}:{props.title}
          </strong>
          <div>{props.body}</div>
        </div>
        <div  className={classes.post__btns}>
          <Button onClick={() => props.removePost(props.post)}>X</Button>
          <Button onClick={() => router.push(`/posts/${props.post.id}`)}>Open</Button>
        </div>
      </div>
    </div>
  );
};

export default Post;
