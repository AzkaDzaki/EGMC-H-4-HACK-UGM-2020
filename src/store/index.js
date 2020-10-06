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

    booking_id: null,

    edit_booking_id: null,

    rec_id: null,

    service_id: null
  },

  getters: {
    user(state){
      return state.user
    },
    user_bio(state){
      return state.user_bio
    },
    booking_id(state){
      return state.booking_id
    },
    edit_booking_id(state){
      return state.edit_booking_id
    },
    rec_id(state){
      return state.rec_id
    },
    service_id(state) {
      return state.service_id
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
    GET_BOOKING_ID(state, data){
      state.booking_id = data
    },
    EDIT_BOOKING_ID(state, data){
      state.edit_booking_id = data
    },
    GET_REC_ID(state, data){
      state.rec_id = data
    },
    GET_SERVICE_ID(state, data){
      state.service_id = data
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
      const response = await axios.get(`http://localhost:8800/egmc/api/users?id=${payload}`)
      commit("SET_USER_BIO", response.data)
    },
    async GET_SERVICE({commit}, payload){
      const response = await axios.get(`http://localhost:8800/egmc/api/healthService?id=${payload}`)
      commit("GET_SERVICE", response.data)
    },
    GET_BOOKING_ID({commit}, payload){
      commit("GET_BOOKING_ID", payload)
    },
    EDIT_BOOKING_ID({commit}, payload){
      commit("EDIT_BOOKING_ID", payload)
    },
    GET_REC_ID({commit}, payload){
      commit("GET_REC_ID", payload)
    },
    GET_SERVICE_ID({commit}, payload){
      commit("GET_SERVICE_ID", payload)
    }
  },

  modules: {
  }
})
