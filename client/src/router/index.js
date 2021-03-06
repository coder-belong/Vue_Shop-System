import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 懒加载
const Login = () => import('../components/login/Login.vue')
const Home = () => import('../views/home/Home.vue')
const HomeWelcome = () => import('../views/home/childHome/HomeWelcome.vue')
const User = () => import('../views/user/User.vue')
const Right = () => import('../views/right/Right.vue')
const Role = () => import('../views/role/Role.vue')
const Category = () => import('../views/category/Category.vue')
const Param = () => import('../views/param/Param.vue')
const Goods = () => import('../views/good/Goods.vue')
const AddGoods = () => import('../views/addGood/AddGoods.vue')
const Order = () => import('../views/order/Order.vue')
const Reports = () => import('../views/reports/Reports.vue')


const children = [  // 首页子级路由
	{
		path: '/',
		redirect: 'welcome'
	},
	{
		path: 'welcome',
		component: HomeWelcome
	},
	{
		path: 'users',
		component: User
	},
	{
		path: 'roles',
		component: Role
	},
	{
		path: 'rights',
		component: Right
	},
	{
		path: 'categories',
		component: Category
	},
	{
		path: 'params',
		component: Param
	},
	{
		path: 'goods',
		component: Goods
	},
	{
		path: 'addgoods',
		component: AddGoods
	},
	{
		path: 'orders',
		component: Order
	},
	{
		path: 'reports',
		component: Reports
	}
]

// 配置路由与组件间的映射关系
const routes = [
	{
		path: '/',
		redirect: '/login' // 重定向到Login路由
	},
	{
		path: '/login',
		component: Login
	},
	{
		path: '/home',
		component: Home,
		children, // 子级路由
		beforeEnter: (to, from, next) => {
			// 进入/home路由前判断是否存储Token，如果有则跳转到/home路由,如果没有则跳转到/login路由
			window.sessionStorage.getItem('userID') ? next() : next('/login')
		}
	},
]

const router = new VueRouter({
	routes,
	mode: 'history'
})

// 解决路由跳转重复问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

export default router