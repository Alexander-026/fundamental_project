import React, { useMemo } from "react";

export const useSortedPosts = (posts, sort) => {
  const sortedPosts = useMemo(() => {
    if (sort) {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
    }

    return posts;
  }, [sort, posts]);

  return sortedPosts;
};
export const usePosts = (posts, sort, query) => {
  const sortedPost = useSortedPosts(posts, sort);
  const sortedAndSearchedPost = useMemo(() => {
    return sortedPost.filter((post) =>
      post.title.toLowerCase().includes(query)
    );
  }, [query, sortedPost]);

  return sortedAndSearchedPost;
};
