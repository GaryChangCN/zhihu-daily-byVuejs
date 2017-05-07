import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

import Index from '../pages/Index.vue';

var routes=[
		{
			path:"/",
			component:Index
		}
	]

export default new Router({
	routes,
	mode:'history'
})