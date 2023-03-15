import {inputMethod} from "../utils/rulesPassword";
export default {
  data() {
    return {
      note: '',
      newPasswordFlag: false
    }
  },
  methods: {
    inputMethod(value) {
      inputMethod.call(this, value)
    },
    newPasswordFocus(key) {
      this[key] = true
    },
    newPasswordBlur(key) {
      this[key] = false
    },
  }
}

