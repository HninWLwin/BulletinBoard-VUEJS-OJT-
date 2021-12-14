import Vue from "vue";
import VueRouter from "vue-router";

import Login from "../pages/user/Login";
import PostList from "../pages/post/PostList";
import UserList from "../pages/user/UserList";
import Create from "../pages/post/Create";
import ConfirmCreatePost from "../pages/post/ConfirmCreatePost";
import Edit from "../pages/post/Edit";
import EditConfirm from "../pages/post/EditConfirm";
import EditUser from "../pages/user/EditUser";
import EditConfirmUser from "../pages/user/EditConfirmUser";
import CreateUser from "../pages/user/CreateUser";
import CreateConfirmUser from "../pages/user/CreateConfirmUser";
import Profile from "../pages/user/Profile";
import EditProfile from "../pages/user/EditProfile";
import ChangePassword from "../pages/user/ChangePassword";

import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/post/list",
    name: "post-list",
    component: PostList,
  },
  {
    path: "/user/list",
    name: "user-list",
    component: UserList,
  },
  {
    path: "/post/create",
    name: "post-create",
    component: Create,
  },
  {
    path: "/post/create-confirm",
    name: "post-create-confirm",
    component: ConfirmCreatePost,
  },
  {
    path: "/post/edit",
    name: "post-edit",
    component: Edit,
  },
  {
    path: "/post/edit-confirm",
    name: "post-edit-confirm",
    component: EditConfirm,
  },
  {
    path: "/user/create",
    name: "user-create",
    component: CreateUser,
  },
  {
    path: "/user/create-confirm",
    name: "user-create-confirm",
    component: CreateConfirmUser,
  },
  {
    path: "/user/edit",
    name: "user-edit",
    component: EditUser,
  },
  {
    path: "/user/edit-confirm",
    name: "user-edit-confirm",
    component: EditConfirmUser,
  },
  {
    path: "/user/profile",
    name: "profile",
    component: Profile,
  },
  {
    path: "/user/profile-edit",
    name: "profile-edit",
    component: EditProfile,
  },
  {
    path: "/user/change-password",
    name: "user-change-password",
    component: ChangePassword,
  },
  {
    path: "/*",
    redirect: "/post/list",
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

/**
 * This is to handle and check authentication for routing.
 */
router.beforeEach((to, from, next) => {
  const loggedIn = store.getters.isLoggedIn;
  if (!loggedIn && to.name != "login") {
    return next("/login");
  }
  next();
});

export default router;
