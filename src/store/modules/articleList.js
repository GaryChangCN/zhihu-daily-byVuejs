import {fetchArticleList} from '../../service';

export default{
	state:{
		articleList:[]
	},
	mutations:{
		UPDATEARTICLELIST(state,{articleList}){
			state.articleList=articleList;
		}
	},
	actions:{
		async latestArticleList(context){
			var articleList=await fetchArticleList("/api/3/news/hot");
			context.commit('UPDATEARTICLELIST',{
				articleList:articleList.recent
			});
		}
	}
}