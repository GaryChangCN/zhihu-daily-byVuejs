import Vuex from 'vuex';
import Vue from 'vue';

import slide from './modules/slide';
import header from './modules/header';
import wheel from './modules/wheel';
import articleList from './modules/articleList'

Vue.use(Vuex);

const store = new Vuex.Store({
	modules:{
		slide,
		header,
		wheel,
		articleList
	}
})

export default store;