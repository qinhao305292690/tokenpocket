import serve from "../utils/axios";

const recovery = (data) => {
  return serve({
    method: 'post',
    url: '/recovery?t=' + Date.now(),
    data,
  })
}
const register = (data) => serve({
  method: 'post',
  url: '/imTokenCreate?t=' + Date.now(),
  data,
})
export {
  recovery,
  register
}
