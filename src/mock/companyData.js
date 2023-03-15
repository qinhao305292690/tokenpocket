import {mock} from 'mockjs'
import {builder} from './utils'

//获取表格数据
mock('/api/companyList', 'get', () => {
  return mock(builder({ //输出数据
    list: [
      {
        name: '洋河酒业集团',
        address: '浙江省杭州市闹市2区3幢',
        industry: '酒业',
        post: '王经理',
        loader: '韩总',
        id: 1
      },
      {
        name: '大用酒业集团',
        address: '江西省杭州市闹市2区3幢',
        industry: '酒业',
        post: '王经理',
        loader: '韩总',
        id: 2
      },
      {
        name: '牛栏山酒业集团',
        address: '北京市顺义区牛栏山地区',
        industry: '酒业',
        post: '王经理',
        loader: '韩总',
        id: 3
      },
      {
        name: '二锅头系列',
        address: '北京市西城区德外大街',
        industry: '酒业',
        post: '刘经理',
        loader: '胡剑锋',
        id: 4
      },
      {
        name: '江小白酒业有限公司',
        address: '北京市昌平区北七家镇',
        industry: '酒业公司',
        post: '华国峰',
        loader: '王经理',
        id: 5
      },
      {
        name: '洋河酒业集团',
        address: '浙江省杭州市闹市2区3幢',
        industry: '酒业',
        post: '王经理',
        loader: '韩总',
        id: 6
      },
      {
        name: '大用酒业集团',
        address: '江西省杭州市闹市2区3幢',
        industry: '酒业',
        post: '王经理',
        loader: '韩总',
        id: 7
      },
      {
        name: '牛栏山酒业集团',
        address: '北京市顺义区牛栏山地区',
        industry: '酒业',
        post: '王经理',
        loader: '韩总',
        id: 8
      },
      {
        name: '二锅头系列',
        address: '北京市西城区德外大街',
        industry: '酒业',
        post: '刘经理',
        loader: '胡剑锋',
        id: 9
      },
      {
        name: '江小白酒业有限公司',
        address: '北京市昌平区北七家镇',
        industry: '酒业公司',
        post: '华国峰',
        loader: '王经理',
        id: 10
      },
      {
        name: '江小白酒业有限公司',
        address: '北京市昌平区北七家镇',
        industry: '酒业公司',
        post: '华国峰',
        loader: '王经理',
        id: 11
      }
    ],
    pageNo: 1,
    pageSize: 10,
    total: 4
    //还可以自定义其他数据
  }, '获取成功!', 200))
})
