import React, { useMemo, useState } from "react";
import classes from "./AddPost.module.scss";
//import Post from "./PostList/Post/Post";
import PostFilter from "./PostFilter/PostFilter";
import PostForm from "./PostForm/PostForm";
import PostList from "./PostList/PostList";
import Button from "../../UI/Button/Button";
import ModalWindow from '../../UI/ModalWindow/ModalWindow'

const AddPost = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "xxx JavaScript1",
      body: "I learning Js and i will be frontend developer",
    },
    {
      id: 2,
      title: "xkmk React Js2",
      body: "I learning Js and React and i will be React frontend developer",
    },
    {
      id: 3,
      title: "kxnmkx TypeScript3",
      body: "I learning TypeScript and i will use TypeScript with Js and React",
    },
  ]);


  const [filter, setFilter] = useState({ sort: "", query: "" });

  const [visible, setVisible] = useState(false)

  const sortedPost = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }

    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPost = useMemo(() => {
    return sortedPost.filter((post) =>
      post.title.toLowerCase().includes(filter.query)
    );
  }, [filter.query, sortedPost]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setVisible(false)
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
        <PostList
          sortedAndSearchedPost={sortedAndSearchedPost}
          removePost={removePost}
        />
      </div>
    </>
  );
};

export default AddPost;
