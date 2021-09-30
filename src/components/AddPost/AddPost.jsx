import React, { useEffect, useState } from "react";
import classes from "./AddPost.module.scss";
import PostFilter from "./PostFilter/PostFilter";
import PostForm from "./PostForm/PostForm";
import PostList from "./PostList/PostList";
import Button from "../../UI/Button/Button";
import ModalWindow from "../../UI/ModalWindow/ModalWindow";
import { usePosts } from "../../hooks/usePosts";
import axios from "axios";
import PostService from "../../API/PostService";
const AddPost = () => {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [visible, setVisible] = useState(false);
  const sortedAndSearchedPost = usePosts(posts, filter.sort, filter.query);



  useEffect(async() => {
    fetchPosts()
  }, [])

  const createPost = (newPost) => {
    setPosts([newPost, ...posts]);
    setVisible(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const fetchPosts = async () => {
    const posts = await PostService.getAll()
    setPosts(posts);
  };

  return (
    <>
      <ModalWindow visible={visible} setVisible={setVisible}>
        <PostForm create={createPost} />
      </ModalWindow>
      <div className={classes.addPost}>
        <Button onClick={() => setVisible(true)}>ADD NEW POST</Button>
        <h1>Posts: {posts.length}</h1>
        <PostFilter filter={filter} setFilter={setFilter} />
      </div>
      <div className={classes.post__container}>
        <PostList
          sortedAndSearchedPost={sortedAndSearchedPost}
          removePost={removePost}
        />
      </div>
    </>
  );
};

export default AddPost;
