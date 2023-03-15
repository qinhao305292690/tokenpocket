import {i18} from "@/i18/i18";
export default function (componentName) {
  return {
    /*
      @componentName: 组件名字,去i18里面的pageText
     */
    created () {
      if (process.env.VUE_APP_lang) {
        const pageText = i18(process.env.VUE_APP_lang)[componentName];
        this.pageText = {...pageText};
      }
    }
  }
}
