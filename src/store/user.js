import axios from '../utils/axios'

export default {
  namespaced: true,
  state: {
    im_token_info: []
  },
  getters: {
    IMTOKEN: ({im_token_info}) => im_token_info
  },
  mutations: {
    SETIMTOKENINFO(context, state) {
      context.im_token_info = state
    }
  },
}
