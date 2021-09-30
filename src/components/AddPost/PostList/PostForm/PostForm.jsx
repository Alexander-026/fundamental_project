import React, { useState } from "react";
import Button from "../../../../UI/Button/Button";
import Input from "../../../../UI/Input/Input";
import classes from "./PostForm.module.scss";

const PostForm = ({create}) => {
  const [post, setPost] = useState({ title: "", body: "" });
  console.log(setPost)
  const addNewPost = (e) => {
    console.log('work')
    e.preventDefault();

   
    if (post.title === " " || post.body === " ") {
      return null;
    }
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost)
    setPost({ title: "", body: "" });
  };

  return (
    <form>
      <Input
        type="text"
        placeholder="User name"
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
      />
      <Input
        type="text"
        placeholder="Text post"
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
      />
      <div className={classes.post__btns}>
        <Button type={"submit"} onClick={addNewPost}>
          send post
        </Button>
      </div>
    </form>
  );
};

export default PostForm;
