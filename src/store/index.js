import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      loggedIn: false,
      data: null
    },

    user_bio: {
      data: null
    },

    get_service: null,

    dokter_bio: null
  },

  getters: {
    user(state){
      return state.user
    },

    user_bio(state){
      return state.user_bio
    },
    dokter_bio(state){
      return state.dokter_bio
    }
  },
  mutations: {
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value;
    },
    SET_USER(state, data) {
      state.user.data = data;
    },
    SET_USER_BIO(state, data){
      state.user_bio = data
    },
    GET_SERVICE(state, data){
      state.get_service = data
    },
    GET_DOCTOR(state, data){
      state.dokter_bio = data
    }
  },

  actions: {
    fetchUser({ commit }, user) {
      commit("SET_LOGGED_IN", user !== null);
      if (user) {
        commit("SET_USER", {
          displayName: user.displayName,
          email: user.email
        });
      } else {
        commit("SET_USER", null);
      }
    },
    async SET_USER_BIO({ commit }, payload){
      const response = await axios.get(`http://localhost:8080/egmc/api/users?id=${payload}`)
      commit("SET_USER_BIO", response.data)
    },
    async GET_SERVICE({commit}, payload){
      const response = await axios.get(`http://localhost:8080/egmc/api/healthService?id=${payload}`)
      commit("GET_SERVICE", response.data)
      if(payload == 'SER-3e5295de-0827-4600-99e4-1546bb81a3a2'){
        let userId = 'DOC-d096bd73-d9ec-4fae-aec4-72143e8ffc6f'
        commit("GET_DOCTOR", userId)
      }
    }
  },

  modules: {
  }
})
