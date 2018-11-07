import Home from '../views/home/Home'
import Piano from '../views/mission/Piano'
import OrderInfo from '../views/mission/OrderInfo'
import NotFound from '../views/404'
import Query from '../views/order/Query'
import Insure from '../views/insure/Insure'
import Packet from '../views/marketing/Packet'
import Coupon from '../views/marketing/Coupon'
import Task from '../views/order/Task'
import Ontime from '../views/order/Ontime'
import Compensation from '../views/compensation/Compensation'

export const constantRoutes = [
  {
    path: '/',
    component: Home,
    name: '订单业务',
    iconCls: 'fa fa-window-maximize',
    leaf: false,
    children: [
      {path: '/order', component: Piano, name: '订单流程'},
      {path: '/query', component: Query, name: '订单查询'},
      {path: '/order/:id', component: OrderInfo, name: '订单详情', hidden: true},
    ]
  },
  {
    path: '/',
    component: Home,
    name: '营销内容',
    iconCls: 'fa fa-indent',
    leaf: false,
    children: [
      {path: '/packets', component: Packet, name: '红包发放'},
      {path: '/coupon', component: Coupon, name: '营销代金券'},
    ]
  },
  {
    path: '/',
    component: Home,
    name: '',
    iconCls: 'fa fa-address-card',
    leaf: true,
    children: [
      {path: '/insure', component: Insure, name: '保险相关'},
    ]
  },
  {
    path: '/',
    component: Home,
    name: '',
    iconCls: 'fa fa-credit-card',
    leaf: true,
    children: [
      {path: '/compensation', component: Compensation, name: '商户索赔'},
    ]
  },
  {
    path: '/',
    component: Home,
    name: '',
    iconCls: 'fa fa-tasks',
    leaf: true,
    children: [
      {path: '/task', component: Task, name: '定时任务'},
    ]
  },
  {
    path: '/',
    component: Home,
    name: '',
    iconCls: 'fa fa-tasks',
    leaf: true,
    children: [
      {path: '/ontime', component: Ontime, name: '准时达'},
    ]
  },
  {
    path: '/',
    hidden: true,
    redirect: {path: '/order'}
  },
  {
    path: '*',
    hidden: true,
    redirect: {path: '/404'}
  },
  {
    path: '/404',
    component: NotFound,
    name: '',
    hidden: true
  },
];
