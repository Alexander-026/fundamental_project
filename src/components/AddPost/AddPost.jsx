import React, { useMemo, useState } from "react";
import classes from "./AddPost.module.scss";
import Post from "./PostList/Post/Post";
import PostFilter from "./PostFilter/PostFilter";
import PostForm from "./PostForm/PostForm";
import PostList from "./PostList/PostList";

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

  //const [selectedSort, setSelectedSort] = useState("");
  //const [searchQuery, setSearchQuery] = useState("");

  const [filter, setFilter] = useState({ sort: "", query: "" });

  const sortedPost = useMemo(() => {
    console.log("useMemo");
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }

    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPost = useMemo(() => {
    console.log("useMemo2");
    return sortedPost.filter((post) =>
      post.title.toLowerCase().includes(filter.query)
    );
  }, [filter.query, sortedPost]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <>
      <div className={classes.post}>
        <div className={classes.post__wrapper}>
          <h1 className={classes.post__title}>Add Post</h1>
          <div className={classes.post__input__wrapper}>
            <PostForm create={createPost} />
          </div>
        </div>
      </div>
      <div className={classes.post__posts}>
        <div className={classes.post__sort}>
          <h1>Posts: {posts.length}</h1>
          <PostFilter filter={filter} setFilter={setFilter} />
        </div>
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
