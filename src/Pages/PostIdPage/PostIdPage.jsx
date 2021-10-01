import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import classes from "./PostIdPage.module.scss";
import useFetching from "../../hooks/useFetching";
import PostService from "../../API/PostService";
import Loader from "../../UI/Loader/Loader";

const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(id);
    setPost(response.data);
  });
  const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
    const response = await PostService.getCommentsByPostId(id);
    setComments(response.data);
  });
  useEffect(() => {
    fetchPostById(params.id);
    fetchComments(params.id);
  }, []);
  return (
    <div className={classes.PostIdPage}>
      <h1>You opened the post page {params.id}</h1>
      {isLoading ? (
        <Loader style={{ marginTop: 0 }} />
      ) : (
        <div>
          <h2>
            {post.id}:Title {post.title}
          </h2>
        </div>
      )}
      <h1>Coments</h1>
      {isLoading ? (
        <Loader style={{ marginTop: 0 }} />
      ) : (
        <div>
          {comments.map((comm) => {
            return (
              <div style={{ marginTop: "10px" }}>
                <h5>{comm.email}</h5>
                <div style={{ color: "#ccc" }}>{comm.body}</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default PostIdPage;
