import Vue from 'vue';
import Router from 'vue-router';
import vueResource from 'vue-resource';
import app from './components/app.vue';
import contents from './components/contents.vue';
import article from './components/article.vue';
import index from "./components/index.vue";
Vue.use(Router);
Vue.use(vueResource);
window.Tin="";
var router = new Router();
router.map({
	'/contents':{
		component:contents
	},
	'/article':{
		component:article
	},
	'/index':{
		component:index
	}
});
router.redirect({
	 '*':'/index'
});
router.start(app, 'app');