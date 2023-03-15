import JAPAN from "./JaPan";
import KOREA from "./korea";
export const i18 = lang => {
  if (!lang) return alert('请传入lang参数');
  lang = lang.toUpperCase()
  const country = {
    JAPAN, // 日本
    KOREA, // 韩国
  }
  return country[lang]
}

