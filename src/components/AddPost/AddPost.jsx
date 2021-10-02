import React, { useEffect, useRef, useState } from "react";
import classes from "./AddPost.module.scss";
import PostFilter from "./PostFilter/PostFilter";
import PostForm from "./PostForm/PostForm";
import PostList from "./PostList/PostList";
import Select from '../../UI/Select/Select'
import Button from "../../UI/Button/Button";
import ModalWindow from "../../UI/ModalWindow/ModalWindow";
import { usePosts } from "../../hooks/usePosts";
import { useObserver } from "../../hooks/useObserver";
import PostService from "../../API/PostService";
import Loader from "../../UI/Loader/Loader";
import useFetching from "../../hooks/useFetching";
import { getPageCount } from "../../utils/getPageCount";
import Pagination from "../../UI/Pagination/Pagination";

const AddPost = () => {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [visible, setVisible] = useState(false);
  const sortedAndSearchedPost = usePosts(posts, filter.sort, filter.query);
  const [totalPages, setTotalPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const lastElement = useRef();

  const [fetchPosts, isPostsLoading, postsError] = useFetching(
    async (limit, page) => {
      const response = await PostService.getAll(limit, page);
      setPosts([...posts, ...response.data]);
      const totalCount = response.headers["x-total-count"];
      setTotalPage(getPageCount(totalCount, limit));
    }
  );

  useObserver(lastElement, page < totalPages, isPostsLoading, () => {
    setPage(page + 1)
  });

  useEffect(async () => {
    fetchPosts(limit, page);
  }, [page, limit]);

  const createPost = (newPost) => {
    setPosts([newPost, ...posts]);
    setVisible(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const changePage = (page) => {
    setPage(page);
    fetchPosts(limit, page);
  };

  return (
    <>
      <ModalWindow visible={visible} setVisible={setVisible}>
        <PostForm create={createPost} />
      </ModalWindow>
      <div className={classes.addPost}>
        <div>
          <div className={classes.addPost__filter}>
            <Button onClick={() => setVisible(true)}>ADD NEW POST</Button>
            <h1>Posts: {posts.length}</h1>
            <Select value={limit} onChange={value => setLimit(value)} defaultValue={'Amount of elements'} options={[
              {value: 5, name: '5'},
              {value: 10, name: '10'},
              {value: 25, name: '25'},
              {value: -1, name: 'All'},
            ]}/>
            <PostFilter filter={filter} setFilter={setFilter} />
            
          </div>
          <div className={"pagination"}>
            <Pagination
              totalPages={totalPages}
              page={page}
              changePage={changePage}
            />
          </div>
        </div>
      </div>
      <div className={classes.post__container}>
        {postsError && <h1 style={{ color: "red" }}>{postsError}</h1>}
        <PostList
          sortedAndSearchedPost={sortedAndSearchedPost}
          removePost={removePost}
        />
        <div ref={lastElement} style={{ height: 20, background: "red" }}></div>
        {isPostsLoading && <Loader />}
      </div>
    </>
  );
};

export default AddPost;
