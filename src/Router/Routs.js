import AddPost from "../components/AddPost/AddPost";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import PostIdPage from "../Pages/PostIdPage/PostIdPage";

export const privateRoutes = [
      {path:"/", component: Home, exact: true },
      {path:"/posts", component: AddPost, exact: true},
      {path:"/posts/:id", component: PostIdPage, exact: true},
]

export const publickRoutes = [
      {path: '/login', component: Login, exact: true}
]