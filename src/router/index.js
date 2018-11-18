import Vue from 'vue'
import Router from 'vue-router'

//实现按需加载
const Login = (resolve) => {
  import('page/Login/Login').then((module) => {
    resolve(module)
  })
}
const ViewPage = (resolve) => {
  import('page/ViewPage/ViewPage').then((module) => {
    resolve(module)
  })
}
const PageDetail = (resolve) => {
  import('page/PageDetail/PageDetail').then((module) => {
    resolve(module)
  })
}
const MusicSearch = (resolve) => {
  import('page/MusicSearch/MusicSearch').then((module) => {
    resolve(module)
  })
}
const MusicMore = (resolve) => {
  import('page/MusicMore/MusicMore').then((module) => {
    resolve(module)
  })
}
const MusicSinger = (resolve) => {
  import('page/MusicSinger/MusicSinger').then((module) => {
    resolve(module)
  })
}
const MusicListPage = (resolve) => {
  import('page/MusicListPage/MusicListPage').then((module) => {
    resolve(module)
  })
}



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
			},{
				path: 'MusicMore',
				name: 'MusicMore',
				component: MusicMore,
				beforeEnter:(to,from,next)=>{//路由守卫函数，next会调用上面的方法来进行组件的路由
					if(to.query.code=="music-singer"){
						next({name:"MusicSinger",query:to.query});
						return;
					}
					if(to.query.code=="music-song"){
						next({name:"MusicListPage",query:to.query});
						return;
					}
					next();
				}
			},{
				path: 'MusicSinger',
				name: 'MusicSinger',
				component: MusicSinger
			},
			{
				path: 'MusicListPage',
				name: 'MusicListPage',
				component: MusicListPage
			}]
		}
	]
})