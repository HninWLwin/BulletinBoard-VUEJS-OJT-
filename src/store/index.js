import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

axios.defaults.baseURL = process.env.VUE_APP_SERVER;

export default new Vuex.Store({
  state: {
    user: null,
    post: null,
    editPostItems: null,
    editConfirmPostItems: null,
    editUserItems: null,
    editConfirmUserItems: null,
    createUser: null,
    deleteUser: null,
    deletePost: null,
    changePass: null
  },
  mutations: {
    setUserData(state, userData) {
      state.user = userData;
    },
    setPostData(state, postData) {
      state.post = postData;
    },
    setEditPostData(state, editPostData) {
      state.editPostItems = editPostData;
    },
    setEditConfirmPostData(state, editConfirmPostData) {
      state.editConfirmPostItems = editConfirmPostData;
    },
    setEditUserData(state, editUserData) {
      state.editUserItems = editUserData;
    },
    setEditConfirmUserData(state, editConfirmUserData) {
      state.editConfirmUserItems = editConfirmUserData;
    },
    setCreateUser(state, createUserData) {
      state.createUser = createUserData;
    },
    setDeleteUser(state, deleteUserData) {
      state.deleteUser = deleteUserData;
    },
    setDeletePost(state, deletePostData) {
      state.deletePost = deletePostData;
    },
    setUserChangePassword(state, userChangePassword) {
      state.changePass = userChangePassword
    }
  },
  actions: {
    login({ commit }, credentials) {
      return axios.post("/auth/login", credentials).then(({ data }) => {
        commit("setUserData", data);
      });
    },
    logout({ commit }, credentials) {
      return axios.post("/auth/logout", credentials).then(() => {
        commit("setUserData", null);
      });
    },
  },
  getters: {
    isLoggedIn: (state) => !!state.user,
    
    userName: (state) => {
      if (state.user && state.user.name) {
        return state.user.name;
      }
    },
    postInfo: (state) => {
      if(state.post) {
        return state.post;
      }
    },
    editPostInfo: (state) => {
      if(state.editPostItems) {
        return state.editPostItems;
      }
    },
    editConfirmPostInfo: (state) => {
      if(state.editConfirmPostItems) {
        return state.editConfirmPostItems;
      }
    },
    editUserInfo: (state) => {
      if(state.editUserItems) {
        return state.editUserItems;
      }
    },
    editConfirmUserInfo: (state) => {
      if(state.editConfirmUserItems) {
        return state.editConfirmUserItems;
      }
    },
    createUserInfo: (state) => {
      if(state.createUser) {
        return state.createUser;
      }
    },
    profileData: (state) => {
      if(state.user) {
        return state.user;
      }
    },
    deleteData: (state) => {
      if(state.deleteUser) {
        return state.deleteUser;
      }
    },
    deletePostData: (state) => {
      if(state.deletePost) {
        return state.deletePost;
      }
    },
    changePassData: (state) => {
      if(state.changePass) {
        return state.changePass;
      }
    }
  },
  plugins: [createPersistedState()],
});
