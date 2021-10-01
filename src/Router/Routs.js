import AddPost from "../components/AddPost/AddPost";
import Home from "../Pages/Home/Home";
import PostIdPage from "../Pages/PostIdPage/PostIdPage";

export const routes = [
      {path:"/", component: Home, exact: true },
      {path:"/posts", component: AddPost, exact: true},
      {path:"/posts/:id", component: PostIdPage, exact: true},
]