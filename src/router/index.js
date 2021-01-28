import Vue from 'vue'
import Router from 'vue-router'

const home =()=> import('views/home/home')
const message =()=> import('views/message/message')
const type =()=> import('views/type/type')
const mypro =()=> import('views/mypro/mypro')

Vue.use(Router)

//获取原型对象上的push函数
const originalPush = Router.prototype.push
//修改原型对象中的push方法
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {// 配置默认路由
    path:'/',
    redirect:'/home'
  },
  {
    path:'/home',
    component:home,
  },
  {
    path:'/message',
    component:message,
  },
  {
    path:'/mypro',
    component:mypro,
  },
  {
    path:'/type',
    component:type,
  }
]
export default new Router({
  routes,
  mode:'history' //设置路由切换方式 修改为history
})
