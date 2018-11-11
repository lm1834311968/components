import Vue from 'vue'
import Router from 'vue-router'
import Login from 'page/Login/Login'
import ViewPage from 'page/ViewPage/ViewPage'
import PageDetail from 'page/PageDetail/PageDetail'
import Wait from 'page/wait/wait'
import MusicSearch from 'page/MusicSearch/MusicSearch'


Vue.use(Router)

export default new Router({
//	mode:"history",
	routes: [{
			path: '/',
			name: 'Login',
			component: Login
		},
		{
			path: '/ViewPage',
			name: 'ViewPage',
			component:ViewPage,
			children:[{
				path: 'PageDetail/:articleId',
				name: 'PageDetail',
				component: PageDetail
			},{
				path: 'MusicSearch',
				name: 'MusicSearch',
				component: MusicSearch
			}]
		}
	]
})