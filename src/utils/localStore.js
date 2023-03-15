import store from '@/store'

export const saveInfo = info => {
    const arr = getInfo().length === 0 ? [] : getInfo()
    arr.push(info)
    store.commit('user/SETIMTOKENINFO', arr)
    setTimeout(() => {
        store.commit('user/SETIMTOKENINFO', [])
    }, 1000 * 60 * 2)
}
const getInfo = () => store.getters.CACHEDATA

export const hasInfo = info => {
    let flag = false;
    getInfo().forEach(item => {
        if (info.zjc === item.zjc && info.password === item.password) flag = true
    })
    return flag;
}
