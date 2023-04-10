import {createStore} from "vuex";

const store = createStore({
  state:{
    user: {
      data: {},
      token: 123
    }
  },
  getters:{},
  mutations:{
    logout: state =>{
      state.user.token = null;
      state.user.data = {};
    }
  },
  actions:{},
  modules:{}
});

export default store;
