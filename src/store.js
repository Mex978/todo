import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = { todos: [], loading: false };

const actions = {
  addTodo({ commit }, todo) {
    commit("setLoading", true);
    return new Promise((resolve) => {
      setTimeout(() => {
        todo.id = Date.now();
        commit("addTodo", todo);
        commit("setLoading", false);
        resolve(todo);
      }, 500);
    });
  },
  toggleTodo({ commit }, todo) {
    commit("toggleTodo", todo);
  },
  removeTodo({ commit }, todo) {
    commit("removeTodo", todo);
  },
  toggleAll({ commit }, value) {
    commit("toggleAll", value);
  },
  removeAllDone({ commit }) {
    commit("removeAllDone");
  },
};

const mutations = {
  addTodo(state, payload) {
    state.todos.push(payload);
  },
  setLoading(state, payload) {
    state.loading = payload;
  },
  toggleTodo(state, payload) {
    const foundedTodo = state.todos.find((t) => payload.id === t.id);
    if (foundedTodo) foundedTodo.checked = !foundedTodo.checked;
  },
  removeTodo(state, payload) {
    state.todos = state.todos.filter((item) => item.id !== payload.id);
  },
  toggleAll(state, payload) {
    state.todos.forEach((todo) => {
      todo.checked = payload;
    });
  },
  removeAllDone(state) {
    state.todos = state.todos.filter((todo) => !todo.checked);
  }
};

const getters = {
  uncheckeds(state) {
    return state.todos.filter((todo) => todo.checked === false);
  },
  checkeds(state) {
    return state.todos.filter((todo) => todo.checked);
  },
};

const store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
});

export default store;
