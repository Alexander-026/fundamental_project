import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Post from "./Post/Post";

const PostList = ({ sortedAndSearchedPost, removePost }) => {
  return (
    <>
      {sortedAndSearchedPost.length ? (
        <TransitionGroup >
          {sortedAndSearchedPost.map((post, index) => {
            return (
              <CSSTransition key={post.id} timeout={500} classNames="post">
                <Post
                  removePost={removePost}
                  number={index + 1}
                  post={post}
                  title={post.title}
                  body={post.body}
                />
              </CSSTransition>
            );
          })}
        </TransitionGroup>
      ) : (
        <h1>Posts not found</h1>
      )}
    </>
  );
};

export default PostList;
