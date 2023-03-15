
export default {
  namespaced: true,
  state: {

  },
  mutations: {
    SET_USERDATA(state) {
      alert('我是mutations')
    }
  },
  actions: {
    GET_USERDATA(ctx) {
      // alert('我是actions')
    }
  }
}
