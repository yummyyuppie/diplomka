import { getAllApprovedPosts } from "../http/storiesAPI";
const getDefaultState = () => {
  return {
    posts: [],
    page: 1,
    totalCount: 0,
    limit: 3,
  };
};
export const stories = {
  namespaced: true,
  state: getDefaultState(),
  getters: {
    posts: (s) => s.posts,
    hasMore: (s) => s.posts.length < s.totalCount,
  },
  mutations: {
    setPosts(state, payload) {
      const unique = payload?.filter(
        (e) => state.posts.findIndex((el) => el.id === e.id) === -1
      );
      state.posts = [...state.posts, ...unique];
    },
    setTotalCount(state, payload) {
      state.totalCount = payload;
    },
    setPage(state) {
      state.page += 1;
    },
  },
  actions: {
    fetchPosts({ state, commit }) {
      getAllApprovedPosts(state.page, state.limit).then((data) => {
        commit("setPosts", data.data.rows);
        commit("setTotalCount", data.data.count);
      });
    },
  },
};
