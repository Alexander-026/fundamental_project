import React from "react";
import Post from "./Post/Post";

const PostList = ({ sortedAndSearchedPost, removePost }) => {
  return (
    <>
      {sortedAndSearchedPost.length ? (
        sortedAndSearchedPost.map((post, index) => {
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
    </>
  );
};

export default PostList;
