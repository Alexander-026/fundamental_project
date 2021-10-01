import React, { useEffect, useState } from "react";
import classes from "./AddPost.module.scss";
import PostFilter from "./PostFilter/PostFilter";
import PostForm from "./PostForm/PostForm";
import PostList from "./PostList/PostList";
import Button from "../../UI/Button/Button";
import ModalWindow from "../../UI/ModalWindow/ModalWindow";
import { usePosts } from "../../hooks/usePosts";
import PostService from "../../API/PostService";
import Loader from "../../UI/Loader/Loader";
import useFetching from '../../hooks/useFetching'
const AddPost = () => {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [visible, setVisible] = useState(false);
  const sortedAndSearchedPost = usePosts(posts, filter.sort, filter.query);
  const [fetchPosts, isPostsLoading, postsError] = useFetching(async() => {
    const posts = await PostService.getAll();
    setPosts(posts);
  })

  useEffect(async () => {
    fetchPosts();
  }, []);

  const createPost = (newPost) => {
    setPosts([newPost, ...posts]);
    setVisible(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
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
        {postsError && <h1 style={{color: 'red'}}>{postsError}</h1>}
        {isPostsLoading ? (
          <Loader />
        ) : (
          <PostList
            sortedAndSearchedPost={sortedAndSearchedPost}
            removePost={removePost}
          />
        )}
      </div>
    </>
  );
};

export default AddPost;
