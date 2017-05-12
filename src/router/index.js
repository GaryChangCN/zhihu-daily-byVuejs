import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

import Index from '../pages/Index.vue';
import ThemeList from '../pages/ThemeList.vue';
import Article from '../pages/Article.vue';

var routes=[
		{
			path:"/",
			component:Index
		},{
			path:"/themeList",
			component:ThemeList
		},{
			path:"/article",
			component:Article
		}
	]

export default new Router({
	routes,
	mode:'hash'
})