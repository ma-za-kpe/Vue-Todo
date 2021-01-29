import Vue from 'vue'
import Vuex from 'vuex'

import Localbase from 'localbase'

let db = new Localbase('db')

db.config.debug = false

Vue.use(Vuex)

export default new Vuex.Store({
  state: { // store all data of our app
    sorting: false,
    appTitle: process.env.VUE_APP_TITLE,
    searchTerm: null,
    tasks: [
      // {
      //   id: 1,
      //   title: "wake Up",
      //   done: false,
      //   dueDate: '2020-11-23'
      // },
      // {
      //   id: 2,
      //   title: "jogging",
      //   done: false,
      //   dueDate: '2020-07-2'
      // },
      // {
      //   id: 3,
      //   title: "Read news",
      //   done: false,
      //   dueDate: '2020-02-6'
      // },
      // {
      //   id: 4,
      //   title: "Post office",
      //   done: false,
      //   dueDate: '2020-02-14'
      // },
    ],
    snackbar: {
      snackText: '',
      show: false
    },

  },
  mutations: { // methods that change data thats in the state by triggering or commiting a mutations (no aynchrounous code)
    addTodo(state, newTodo) {
      state.tasks.push(newTodo);
    },
    editTodo(state, payload) {
      let task = state.tasks.filter((task) => task.id === payload.id)[0];
      task.title = payload.title
    },
    deleteTodo(state, id) {
      state.tasks = state.tasks.filter((task) => task.id !== id);
    },
    dueDateTodo(state, payload) {
      let task = state.tasks.filter((task) => task.id === payload.id)[0];
      task.dueDate = payload.dueDate
    },
    done(state, id) {
      let task = state.tasks.filter((task) => task.id === id)[0];
      task.done = !task.done;
    },

    showSnackBar(state, msg) {
      let timeout = 0
      if (state.snackbar.show) {
        state.snackbar.show = false
        timeout = 300
      }
      setTimeout(() => {
        state.snackbar.show = true
        state.snackbar.snackText = msg
      }, timeout)
    },
    hideSnackBar(state) {
      state.snackbar.show = false
    },
    setSearch(state, value) {
      state.searchTerm = value
    },
    toggleSorting(state) {
      state.sorting = !state.sorting
    },
    updateTodoList(state, value) {
      state.tasks = value
    }
  },
  actions: { // [dispatch] cant change data in state, you gotta commit in mutations, (yes aynchrounous code/ api calls)
    addTodo({ commit }, newTodoItem) {
      let newTodo = {
        id: Date.now(),
        title: newTodoItem,
        done: false,
        dueDate: null
      };
      db.collection('todos').add(newTodo).then(() => {
        commit('addTodo', newTodo)
        commit('showSnackBar', 'Todo added')
      })

    },
    getTodos({ commit }) {
      db.collection('todos').get().then(todos => {
        console.log(todos)
        commit('updateTodoList', todos)
      })
    },
    done({ state, commit }, id) {
      let task = state.tasks.filter((task) => task.id === id)[0];
      db.collection('todos').doc({ id: id }).update({
        done: !task.done
      }).then(() => {
        commit('done', id)
      })
    },
    editTodo({ commit }, updatedTodoItem) {
      db.collection('todos').doc({ id: updatedTodoItem.id }).update({
        title: updatedTodoItem.title
      }).then(() => {
        commit('editTodo', updatedTodoItem)
        commit('showSnackBar', 'Todo edited')
      })
    },
    deleteTodo({ commit }, id) {
      db.collection('todos').doc({ id: id }).delete().then(() => {
        commit('deleteTodo', id)
        commit('showSnackBar', 'Todo deleted')
      })
    },
    dueDateTodo({ commit }, payload) {
      console.log(payload)
      db.collection('todos').doc({ id: payload.id }).update({
        dueDate: payload.dueDate
      }).then(() => {
        commit('dueDateTodo', payload)
        commit('showSnackBar', 'Todo date set.')
      })

    },
    updateTodoList({ commit }, todos) {
      db.collection('todos').set(todos)
      commit('updateTodoList', todos)
    }
  },
  getters: { //used to get data that has been modified
    filteredTasks(state) {
      if (!state.searchTerm) {
        return state.tasks
      }

      return state.tasks.filter(task => task.title.toLowerCase().includes(state.searchTerm.toLowerCase()))
    }
  },
  modules: {
  }
})
