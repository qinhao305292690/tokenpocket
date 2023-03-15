import { mock } from 'mockjs'
import { builder } from './utils'
//获取菜单接口

mock('/getMenus', 'get', builder({ //输出数据
    menus: ['/contract', '/company', '/bankAccount', ]
        //还可以自定义其他数据
}, '获取成功!', 200))