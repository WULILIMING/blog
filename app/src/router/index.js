import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Main from '@/components/Main'
import Home from '@/components/Home'
import Me from '@/components/Me'
import Study from '@/components/Study'
import Works from '@/components/Works'
import Life from '@/components/Life'
import Message from '@/components/Message'
import AddArticle from '@/components/AddArticle'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },{
      path: '/main',
      name: 'Main',
			component: Main,
			redirect: '/home',
			children:[
			{
				path: '/home',
				name: 'home',
				component: Home
			}, {
				path: '/me',
				name: 'me',
				component: Me
			}, {
				path: '/study',
				name: 'study',
				component: Study
			}, {
				path: '/works',
				name: 'works',
				component: Works
			}, {
				path: '/life',
				name: 'life',
				component: Life
			}, {
				path: '/message',
				name: 'message',
				component: Message
			},{
				path: '/addarticle',
				name: 'addarticle',
				component: AddArticle
			}
	  ]
    },{
			path: '/login',
			name: 'login',
			component: Login
		}
  ]
})

