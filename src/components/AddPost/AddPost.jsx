import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import classes from "./AddPost.module.scss";
import Post from "./Post/Post";
import PostForm from "./PostForm/PostForm";
import Select from '../../UI/Select/Select'

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

  const [selectedSort, setSelectedSort] = useState('')

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };


  //? Sort Posts
  const sortPost = (sort) => {
    
    setSelectedSort(sort)
   setPosts([...posts].sort((a,b) => a[sort].localeCompare(b[sort])))
  }

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
         <Select value={selectedSort} onChange={sortPost} defaultValue={'Sort by'} options={[
           {value: 'title', name: 'By name'},
           {value: 'body', name: 'By description'},
         ]}/>
        </div>
      </div>
      <div className={classes.post__container}>
        {posts.length ? (
          posts.map((post, index) => {
            return (
              <Post
                removePost={removePost}
                number={index + 1}
                post={post}
                key={post.id}
                title={post.title}
                body={post.body}
              />
            );
          })
        ) : (
          <h1>Posts not found</h1>
        )}
      </div>
    </>
  );
};

export default AddPost;
