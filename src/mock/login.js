import { mock } from 'mockjs'
import { builder } from './utils'

//登录接口
mock('/api/login', 'post', function({ body }) {
        let data = JSON.parse(body)
        if (data.accountName === 'admin' && data.passWord === '123') {
            return mock(builder({ //输出数据
                name: '@name', //随机生成姓名
                'userId|1-50': 50,
                'token': '@string("lower", 50)'
                    //还可以自定义其他数据
            }, '登录成功!', 200))
        } else {
            return mock(builder({ //输出数据
                name: '胡剑锋'
                    //还可以自定义其他数据
            }, '用户名或密码错误!', 500))
        }

    })
    //获取菜单接口
mock('/api/getMenus', 'get', () => {
    const { name, userId, token } = JSON.parse(sessionStorage.getItem('userData'))
    return mock(builder({ //输出数据
        name,
        userId,
        token,
        avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589041936510&di=602df9352ee03d832cc769ab9a182d51&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201501%2F30%2F20150130180443_QTthA.thumb.700_0.jpeg',
        menus: [
                '/',
                '/WelcomePage',
                '/contract',
                '/company',
                '/company/list',
                '/bankAccount',
                '/company/sub',
                '/dashboard',
                '/company/detail',
                '/settings',
            ] //路由权限
            //还可以自定义其他数据
    }, '获取成功!', 200))
})